
'use client';
import { SignIn } from "@clerk/nextjs";


export default function Page() {
  return (
    <div>
      <SignIn
      appearance={{
            variables: {
              colorPrimary: "#44b4f1", // Theme color for primary elements
            },
            elements: {
              card: "shadow-lg border border-gray-200 rounded-lg", // Add styling to the sign-in card
              formButtonPrimary: "bg-[#44b4f1] hover:bg-[#3aa1d8] text-white", // Style primary buttons
            },
          }}
      />
    </div>
  );
}