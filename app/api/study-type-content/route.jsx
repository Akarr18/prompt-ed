import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm"; // ✅ make sure you import this!

export async function POST(req) {
  const { chapters, courseId, type } = await req.json();

  const PROMPT =
    type === "Flashcard"
      ? "Generate the flashcard on topic: " + chapters + " in JSON format with front back content, Maximum 15"
      : type === "Quiz"
      ? "Generate Quiz on topic: " + chapters + " with Question and Options along with correct answer in JSON format, (Max 10)"
      : "Generate 10 Question and Answer on topic: " +
        chapters +
        " in exact JSON format no extra text with question and answer content. Each answer should be minimum 7 lines.";

  // 1. Insert placeholder row (no content yet)
  const result = await db
    .insert(STUDY_TYPE_CONTENT_TABLE)
    .values({
      courseId: courseId,
      type: type,
    })
    .returning({ id: STUDY_TYPE_CONTENT_TABLE.id });

  const recordId = result[0].id;

  // 2. Trigger Inngest function
  await inngest.send({
    name: "studyType.content",
    data: {
      studyType: type,
      prompt: PROMPT,
      courseId: courseId,
      recordId: recordId,
    },
  });

  // 3. Poll for update (wait max 30s)
  const maxAttempts = 60;
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    for (let i = 0; i < maxAttempts; i++) {
    const check = await db
      .select()
      .from(STUDY_TYPE_CONTENT_TABLE)
      .where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));

    const record = check?.[0];

    // If content exists and has data
    if (record?.content) {
      try {
        const parsed = typeof record.content === "string"
          ? JSON.parse(record.content)
          : record.content;

        if (Array.isArray(parsed) && parsed.length > 0) {
          return NextResponse.json({ success: true, recordId });
        }

        // If content is an object with keys like "qa", "quiz", etc.
        if (typeof parsed === "object" && Object.keys(parsed).length > 0) {
          return NextResponse.json({ success: true, recordId });
        }
      } catch (e) {
        // JSON parse failed — assume still not ready
      }
    }

    await delay(1000);
  }


  // 4. Timed out waiting
  return NextResponse.json(
    { success: false, error: "Timed out waiting for content generation." },
    { status: 202 }
  );
}
