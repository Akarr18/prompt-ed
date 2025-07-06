const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};



export const GenerateCourseOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for  Exam and level of difficulty will be EASY with summery of course,List of Chapters along with summery for each chapter, Topic list in each chapter, All resule in JSON format\n\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course_title": "Python for Beginners",\n  "difficulty": "Easy",\n  "summary": "This course provides an introduction to the Python programming language, covering the fundamentals necessary to write simple programs and understand basic programming concepts.",\n  "chapters": [\n    {\n      "chapter_title": "Introduction to Python",\n      "summary": "This chapter introduces the Python programming language, its history, and its uses. It also covers basic syntax and the concept of variables and data types.",\n      "topics": [\n        "What is Python?",\n        "Why use Python?",\n        "Installing Python",\n        "Running Python code",\n        "Basic syntax",\n        "Variables and data types",\n        "Operators"\n      ]\n    },\n    {\n      "chapter_title": "Control Flow",\n      "summary": "This chapter focuses on controlling the flow of execution in Python programs, including conditional statements, loops, and functions.",\n      "topics": [\n        "Conditional statements (if, elif, else)",\n        "Loops (for, while)",\n        "Loop control statements (break, continue)",\n        "Functions"\n      ]\n    },\n    {\n      "chapter_title": "Data Structures",\n      "summary": "This chapter introduces fundamental data structures in Python, such as lists, tuples, dictionaries, and sets.",\n      "topics": [\n        "Lists",\n        "Tuples",\n        "Dictionaries",\n        "Sets"\n      ]\n    },\n    {\n      "chapter_title": "Strings and Input/Output",\n      "summary": "This chapter covers working with strings, taking input from the user, and displaying output in Python programs.",\n      "topics": [\n        "String manipulation",\n        "String formatting",\n        "Input and output (input(), print())"\n      ]\n    },\n    {\n      "chapter_title": "Modules and Libraries",\n      "summary": "This chapter introduces the concept of modules and libraries in Python, allowing you to leverage pre-written code for various tasks.",\n      "topics": [\n        "What are modules and libraries?",\n        "Importing modules",\n        "Using built-in modules",\n        "Third-party libraries"\n      ]\n    },\n    {\n      "chapter_title": "Error Handling",\n      "summary": "This chapter covers how to handle errors in Python programs, ensuring graceful execution and preventing program crashes.",\n      "topics": [\n        "Types of errors",\n        "Try-except blocks",\n        "Raising exceptions"\n      ]\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});
export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate exam material detail content for each chapter. Make sure to include structured headings and explanations in HTML format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `<h2>Introduction to Atoms</h2>
                   <h3>What are atoms?</h3>
                   <p>Atoms are the basic building blocks of matter...</p>`,
        },
      ],
    },
  ],
});
