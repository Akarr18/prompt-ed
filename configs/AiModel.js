const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash", // you can switch to "gemini-1.5-flash-002" if you prefer
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const GenerateCourseOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate a study material for Python for an Exam and level of difficulty will be EASY with summary of course, List of Chapters along with summary for each chapter, Topic list in each chapter, All results in JSON format`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
{
  "courseTitle": "Python Fundamentals for Beginners Exam",
  "courseSummary": "This study material is designed for individuals preparing for an entry-level Python exam. It covers core Python concepts from the ground up, focusing on fundamental syntax, basic data structures, control flow, and functions. The content is presented in an easy-to-understand manner, ideal for absolute beginners looking to build a strong foundation in programming with Python.",
  "difficultyLevel": "EASY",
  "chapters": [
    {
      "chapterNumber": 1,
      "chapterTitle": "Getting Started with Python",
      "chapterSummary": "This chapter introduces what Python is, its widespread uses, and why it's an excellent language for beginners. It covers the very basics of setting up a Python environment conceptually.",
      "topics": [
        "Introduction to Python: What it is and its benefits",
        "Common applications of Python",
        "Key features of Python",
        "Conceptual overview of Python installation and IDEs"
      ]
    },
    {
      "chapterNumber": 2,
      "chapterTitle": "Variables and Data Types",
      "chapterSummary": "Learn how to store and manage data in Python using variables. This chapter covers the most common built-in data types and how to assign values to variables.",
      "topics": [
        "What are variables?",
        "Assigning values",
        "Basic data types",
        "Type conversion"
      ]
    },
    {
      "chapterNumber": 3,
      "chapterTitle": "Operators in Python",
      "chapterSummary": "This chapter introduces operators including arithmetic, comparison, and logical operators.",
      "topics": [
        "Arithmetic Operators",
        "Comparison Operators",
        "Logical Operators"
      ]
    },
    {
      "chapterNumber": 4,
      "chapterTitle": "Control Flow",
      "chapterSummary": "Learn about conditional statements and loops in Python.",
      "topics": [
        "If/Else Statements",
        "For Loops",
        "While Loops",
        "Break/Continue"
      ]
    }
  ]
}
\`\`\``,
        },
      ],
    },
  ],
});

export const generateNotesAiModel = model.startChat({
  generationConfig: generationConfig2,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate exam material detailed content for each chapter. 
Use structured headings, subheadings, and HTML tags like <h2>, <h3>, <ul>, <li>, <p>, etc.
Make sure each topic under the chapter has its explanation.
The content should be wrapped in proper HTML format (excluding <html>, <head>, <body>).
Do not add markdown or triple backticks.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `
<h2>Introduction to Atoms</h2>
<p>This chapter introduces the fundamental concept of atoms as the building blocks of matter.</p>

<h3>What are atoms?</h3>
<p>Atoms are the smallest units of matter that retain the properties of an element. They consist of a nucleus (containing protons and neutrons) and are surrounded by electrons.</p>

<h3>Early Atomic Models</h3>
<ul>
  <li><strong>Dalton's Model:</strong> Atoms are solid, indivisible spheres.</li>
  <li><strong>Thomson's Model:</strong> "Plum pudding" model where electrons are embedded in a positively charged sphere.</li>
  <li><strong>Rutherford's Model:</strong> A dense nucleus with electrons orbiting in empty space.</li>
</ul>

<h3>Subatomic Particles</h3>
<ul>
  <li><strong>Protons:</strong> Positively charged particles in the nucleus.</li>
  <li><strong>Neutrons:</strong> Neutral particles also in the nucleus.</li>
  <li><strong>Electrons:</strong> Negatively charged particles orbiting the nucleus.</li>
</ul>
`,
        },
      ],
    },
  ],
});