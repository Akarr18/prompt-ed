"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { RefreshCcw } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

function MaterialCardItem({ item, studyTypeContent, course, refreshData }) {
  const [loading, setLoading] = useState(false);

  const GenerateContent = async () => {
    toast("Generating your content...");
    setLoading(true);

    let chapters = "";
    course?.courseLayout.chapters.forEach((chapter) => {
      chapters =
        (chapter.chapter_title || chapter.chapterTitle) + "," + chapters;
    });

    try {
      const result = await axios.post("/api/study-type-content", {
        courseId: course?.courseId,
        type: item.name,
        chapters: chapters,
      });

      // ⚠️ Ensure the API only resolves after Inngest completes DB update
      if (result.status === 200 && result.data?.success) {
        toast("Your content is ready to view");
        await refreshData(true); // This will re-fetch updated data
      } else {
        throw new Error("Failed to generate content");
      }
    } catch (error) {
      toast.error("Failed to generate content. Try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contentReady =
    studyTypeContent?.[item.type]?.length > 0;

  return (
    <div
      className={`border shadow-md rounded-lg p-5 flex flex-col items-center ${
        !contentReady && "grayscale"
      }`}
    >
      <h2
        className={`p-1 px-2 rounded-full text-[10px] mb-2 ${
          contentReady ? "bg-green-500" : "bg-gray-500"
        } text-white`}
      >
        {contentReady ? "Ready" : "Generate"}
      </h2>

      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-medium mt-3">{item.name}</h2>
      <p className="text-gray-500 text-sm text-center">{item.desc}</p>

      {!contentReady ? (
        <Button
          className="mt-3 w-full"
          variant="outline"
          onClick={GenerateContent}
          disabled={loading}
        >
          {loading && <RefreshCcw className="animate-spin mr-2" />}
          Generate
        </Button>
      ) : (
        <Link href={`/course/${course?.courseId}${item.path}`}>
          <Button className="mt-3 w-full" variant="outline">
            View
          </Button>
        </Link>
      )}
    </div>
  );
}

export default MaterialCardItem;
