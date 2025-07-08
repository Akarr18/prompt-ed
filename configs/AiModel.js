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

export const GenerateFlashcardAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate the flashcard on topic : Flutter Fundamentals,User Interface (UI) Development,Basic App Navigation in JSON format with front back content, Maximum 15",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "front": "What is a Widget in Flutter?",\n    "back": "A Widget is the basic building block of a Flutter UI. Everything you see on the screen is a widget, including layout elements, text, images, and more.  They are immutable and describe the UI."\n  },\n  {\n    "front": "Explain the difference between StatelessWidget and StatefulWidget.",\n    "back": "StatelessWidget: Its UI doesn\'t change after it\'s built.  StatefulWidget: Its UI can change based on user interaction or other factors. It manages its own state using State objects."\n  },\n  {\n    "front": "Name three common layout widgets in Flutter.",\n    "back": "Row, Column, and Stack are common layout widgets.  Row arranges children horizontally, Column vertically, and Stack overlays children."\n  },\n  {\n    "front": "What is the purpose of a `BuildContext`?",\n    "back": "BuildContext provides information about the location of a widget within the widget tree. It\'s used to access the theme, parent widgets, and other contextual information."\n  },\n  {\n    "front": "How do you display text in Flutter?",\n    "back": "Use the `Text` widget.  You can style it with properties like `style`, `textAlign`, `textDirection`, etc."\n  },\n  {\n    "front": "How do you navigate to a new screen in Flutter?",\n    "back": "Use `Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()));`  This pushes a new route onto the navigation stack."\n  },\n  {\n    "front": "How do you pass data to a new screen during navigation?",\n    "back": "Pass data via the constructor of the new screen\'s widget.  You can also use named routes and pass arguments via `RouteSettings`."\n  },\n  {\n    "front": "What is a `MaterialApp` widget?",\n    "back": "It\'s the root widget of a Flutter application that provides material design styling and navigation capabilities."\n  },\n  {\n    "front": "What is the purpose of the `Scaffold` widget?",\n    "back": "Provides a basic visual layout structure for a Material Design app including an AppBar, Body, and Drawer."\n  },\n  {\n    "front": "How do you handle user input in Flutter?",\n    "back": "Using widgets like `TextField` and `Checkbox` to capture user input. Then process these inputs within the state of a StatefulWidget."\n  },\n  {\n    "front": "What are keys in Flutter widgets?",\n    "back": "Keys provide a way to uniquely identify widgets, especially when the structure of the widget tree changes dynamically. This helps Flutter manage the UI effectively during rebuilds."\n  },\n  {\n    "front": "Explain the concept of a routing table in Flutter.",\n    "back": "A routing table (often implemented using `MaterialApp`\'s `routes` property) maps named routes to widget builders, allowing for easy navigation to specific screens based on route names."\n  },\n  {\n    "front": "What is the difference between `push` and `pushReplacementNamed` in navigation?",\n    "back": "`push` adds a new route to the navigation stack. `pushReplacementNamed` replaces the current route with a new one, removing the previous route from the stack."\n  },\n  {\n    "front": "How to pop a route from the navigation stack?",\n    "back": "Use `Navigator.pop(context);` or `Navigator.pop(context, data);` to pop the current route and optionally return data to the previous screen."\n  },\n  {\n    "front": "What\'s the role of `initState()` in a StatefulWidget?",\n    "back": "It\'s a lifecycle method called only once when the StatefulWidget is inserted into the widget tree. It\'s used for initializing state variables."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});
export const GenerateQuizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Quiz on topic : Flutter Fundamentals,User Interface (UI) Development,Basic App Navigation with Question and Options along with correct answer in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "quizTitle": "Flutter Fundamentals, UI Development & Basic Navigation",\n  "questions": [\n    {\n      "question": "What is the fundamental building block of a Flutter UI?",\n      "options": ["Widget", "Layout", "View", "Component"],\n      "answer": "Widget"\n    },\n    {\n      "question": "Which widget is used to arrange children in a column?",\n      "options": ["Row", "Column", "Stack", "Container"],\n      "answer": "Column"\n    },\n    {\n      "question": "What does `StatelessWidget` mean in Flutter?",\n      "options": ["A widget that changes its state based on user interaction", "A widget whose state never changes", "A widget that manages its own state", "A widget that relies on external state management"],\n      "answer": "A widget whose state never changes"\n    },\n    {\n      "question": "Which widget is best suited for creating a scrollable list of items?",\n      "options": ["ListView", "GridView", "Column", "Row"],\n      "answer": "ListView"\n    },\n    {\n      "question": "How do you navigate to a new screen in Flutter?",\n      "options": ["Using `Navigator.push`", "Using `setState`", "Using `BuildContext.push`", "Using `Navigator.pop`"],\n      "answer": "Using `Navigator.push`"\n    },\n    {\n      "question": "What does the `BuildContext` provide?",\n      "options": ["Access to the application\'s theme", "Information about the widget\'s position in the widget tree", "A way to access shared preferences", "A mechanism for handling user input"],\n      "answer": "Information about the widget\'s position in the widget tree"\n    },\n    {\n      "question": "Which widget is commonly used to display an image in Flutter?",\n      "options": ["Image.asset", "Image.network", "Icon", "Text"],\n      "answer": "Image.asset"\n    },\n    {\n      "question": "What is the purpose of a `Key` in Flutter?",\n      "options": ["To uniquely identify a widget", "To manage state changes", "To style widgets", "To handle user input"],\n      "answer": "To uniquely identify a widget"\n    },\n    {\n      "question": "How do you pass data to a new screen during navigation?",\n      "options": ["Using arguments in `Navigator.push`", "Using `setState`", "Using global variables", "Using shared preferences"],\n      "answer": "Using arguments in `Navigator.push`"\n    },\n    {\n      "question": "What is the role of a `Scaffold` widget?",\n      "options": ["Provides a basic visual layout structure", "Manages app state", "Handles navigation", "Displays images"],\n      "answer": "Provides a basic visual layout structure"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});