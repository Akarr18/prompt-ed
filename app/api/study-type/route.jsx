import { db } from "@/configs/db";
import {
  CHAPTER_NOTES_TABLE,
  STUDY_TYPE_CONTENT_TABLE,
} from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// studyType (Study Material Fetching)
// Purpose: Retrieves available study materials for a course (notes, flashcards, quizzes, and Q&A).
// Triggered By: StudyMaterialSection component via the GetStudyMaterial() function.
// API Route Used: /api/study-type (from route.jsx [6]).
// Database Table Used: CHAPTER_NOTES_TABLE.

export async function POST(req) {
  const { courseId, studyType } = await req.json(); // Get The Study Type from The Request

  if (studyType == "ALL") {
    const notes = await db
      .select()
      .from(CHAPTER_NOTES_TABLE)
      .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));
   
    {
      /*content list save the quiz and chapter data from the database - STUDY_TYPE_CONTENT_TABLE*/
    }
   

    const result = {
      notes: notes,
      flashcard: null,
      quiz: null,
      qa: null,
    };
      return NextResponse.json(result);
  }
  
  } 