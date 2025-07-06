"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import TopicInput from "./_components/TopicInput";
import { Button } from "@/components/ui/button";
//import { useUser } from "@clerk/nextjs";
//import axios from "axios";
//import { useRouter } from "next/navigation";
//import { useToast } from "@/hooks/use-toast";
///const { v4: uuidv4 } = require("uuid");
//import { Loader2 } from "lucide-react"; // Example from Lucide Icons

/**
 * Creates a course outline based on user input.
 *
 * - State variables: step, formData, user, loading, and router.
 * - Steps:
 *   - Step 0: Select study type.
 *   - Step 1: Enter topic and select difficulty level.
 * - handleUserInput: Handles user input and updates formData.
 * - GenerateCourseOutline: Submits form data to API and redirects to dashboard.
 * @returns A JSX element with a form and buttons to navigate and generate the course outline.
 */

function Create() {
  const [step, setStep] = useState(0);
   const [formData, setFormData] = useState([]);
  // const { user } = useUser();
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();
  // const { toast } = useToast();

  // handleUserInput provides a reusable function to update any field dynamically.
  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    //console.log(formData);
  };

  
  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-primary">
        📚 Craft Your Ultimate Cheat Sheet!
      </h2>
      <p className="text-gray-500 text-lg mt-5">
        Fill All details in order to generate study material for your next
        project
      </p>

      <div className="mt-10">
        {step == 0 ? (
          <SelectOption
            selectedStudyType={(value) => handleUserInput("courseType", value)}
          />
        ) : (
          <TopicInput
            setTopic={(value) => handleUserInput("topic", value)}
            setDifficultyLevel={(value) =>
              handleUserInput("difficultyLevel", value)
            }
          />
        )}
      </div>

      <div className="flex justify-between w-full mt-32">
        <Button
          variant="outline"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
        >
          Previous
        </Button>
        {step === 0 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button>
            Generate
          </Button>
        )}
      </div>
    </div>
  );
}

export default Create;
