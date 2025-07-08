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

export const GenerateQaAiModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: `"Generate 10 Question and Answer on topic : Ions and Isotopes ➕➖,Atomic Structure and Electron Configuration ⚛️,What are Atoms? 🤔,in JSON format with question and answer content amswer should be minimum 8 lines",`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
          text: `\`\`\`json
[
  {
    "question": "What is an atom 🤔, and what are its fundamental components?",
    "answer": "An atom is the smallest unit of matter that retains an element's chemical identity. It's the basic building block of all chemical substances and consists of a central nucleus surrounded by a cloud of electrons.\\n\\nIts fundamental components are:\\n\\n1.  **Protons ➕:** Positively charged subatomic particles located in the atom's nucleus. The number of protons defines the atomic number and thus the element's identity.\\n2.  **Neutrons ➖:** Neutral (no charge) subatomic particles also found in the nucleus. They contribute to the atom's mass but not its charge. The varying number of neutrons gives rise to isotopes.\\n3.  **Electrons ⚛️:** Negatively charged subatomic particles that orbit the nucleus in specific energy levels or shells. They are much lighter than protons and neutrons and play a crucial role in chemical bonding."
  },
  {
    "question": "Describe the atomic structure ⚛️, detailing the location and characteristics of its subatomic particles.",
    "answer": "The atomic structure is predominantly empty space, with a tiny, dense nucleus at its center, surrounded by a vast electron cloud.\\n\\n*   **The Nucleus:** This central core is incredibly dense and contains virtually all of the atom's mass. It's composed of positively charged protons and neutral neutrons. The strong nuclear force binds these nucleons (protons and neutrons) together, overcoming the electrostatic repulsion between the positively charged protons. The nucleus carries a net positive charge equal to the number of protons.\\n\\n*   **The Electron Cloud:** Surrounding the nucleus is the electron cloud, a region where negatively charged electrons are found. These electrons move rapidly in specific energy levels or shells, which dictate their proximity to the nucleus. While electrons are much lighter than protons and neutrons, their motion defines the atom's volume. The electron cloud is primarily empty space, yet it's where all chemical interactions occur."
  },
  {
    "question": "What is electron configuration ⚛️, and why is it crucial for understanding chemical reactivity?",
    "answer": "Electron configuration is the systematic arrangement or distribution of electrons of an atom or molecule in atomic or molecular orbitals. It describes how electrons are distributed among the various energy levels, subshells, and orbitals within an atom.\\n\\nIt is crucial for understanding chemical reactivity for several reasons:\\n\\n1.  **Valence Electrons:** The electrons in the outermost shell, known as valence electrons, are directly involved in chemical bonding. The electron configuration immediately reveals the number of valence electrons an atom possesses.\\n2.  **Stability and Reactivity:** Atoms tend to gain, lose, or share electrons to achieve a stable electron configuration, typically resembling that of a noble gas (an 'octet' of 8 valence electrons). The electron configuration dictates whether an atom will readily lose, gain, or share electrons, thus determining its reactivity.\\n3.  **Periodic Trends:** Electron configurations explain recurring patterns and trends in the periodic table, such as electronegativity, ionization energy, and atomic size.\\n4.  **Bonding Patterns:** It predicts how atoms will interact and form bonds (ionic, covalent), allowing us to understand the types of compounds they will form and their resulting properties."
  },
  {
    "question": "Explain the concept of valence electrons ⚛️. Why are they particularly important in chemistry?",
    "answer": "Valence electrons are the electrons located in the outermost electron shell of an atom. These are the electrons that are furthest from the nucleus and are thus the least tightly bound. They are also the electrons that participate directly in chemical bonding and reactions.\\n\\nThey are particularly important in chemistry for several key reasons:\\n\\n1.  **Chemical Reactivity:** The number of valence electrons an atom has largely determines its chemical reactivity and the types of reactions it will undergo. Atoms tend to react in ways that allow them to achieve a stable electron configuration, usually by having a full outer shell (octet rule).\\n2.  **Bond Formation:** Valence electrons are the ones gained, lost, or shared when atoms form chemical bonds (ionic, covalent, metallic). For example, metals with few valence electrons tend to lose them to form cations, while nonmetals with many valence electrons tend to gain electrons to form anions.\\n3.  **Group Properties:** Elements in the same group (column) of the periodic table have the same number of valence electrons, which is why they exhibit similar chemical properties. This concept is fundamental to understanding the organization of the periodic table.\\n4.  **Predicting Compounds:** By knowing the number of valence electrons, one can predict the likely stoichiometry and types of compounds an element will form with other elements."
  },
  {
    "question": "What are ions ➕➖, how do they form, and what is the distinction between cations and anions?",
    "answer": "Ions are atoms or molecules that have gained or lost one or more electrons, resulting in a net electrical charge (either positive or negative). Unlike neutral atoms, which have an equal number of protons and electrons, ions have an imbalance.\\n\\nIons form when atoms either:\\n\\n*   **Lose Electrons:** This typically occurs with metal atoms. When an atom loses one or more negatively charged electrons, its number of protons (positive charges) becomes greater than its number of electrons, resulting in a net positive charge.\\n*   **Gain Electrons:** This typically occurs with nonmetal atoms. When an atom gains one or more negatively charged electrons, its number of electrons becomes greater than its number of protons, resulting in a net negative charge.\\n\\nThis gain or loss of electrons often occurs to achieve a more stable electron configuration, typically resembling that of a noble gas (an 'octet' of 8 valence electrons).\\n\\n**Distinction between Cations and Anions:**\\n\\n*   **Cations ➕:** These are positively charged ions. They form when a neutral atom *loses* one or more electrons. Examples include Na⁺ (sodium ion), Ca²⁺ (calcium ion), and Al³⁺ (aluminum ion).\\n*   **Anions ➖:** These are negatively charged ions. They form when a neutral atom *gains* one or more electrons. Examples include Cl⁻ (chloride ion), O²⁻ (oxide ion), and N³⁻ (nitride ion)."
  },
  {
    "question": "Define isotopes ➕➖. How do they differ from one another, and why are they still considered the same element?",
    "answer": "Isotopes are atoms of the same chemical element that have the same number of protons but different numbers of neutrons. This means they have the same atomic number but different mass numbers.\\n\\nThey differ from one another primarily in their:\\n\\n1.  **Mass Number:** Since the mass number is the sum of protons and neutrons, a different number of neutrons directly leads to a different mass number. For example, Carbon-12 has 6 protons and 6 neutrons (mass number 12), while Carbon-14 has 6 protons and 8 neutrons (mass number 14).\\n2.  **Atomic Mass:** Due to the difference in mass number, isotopes of the same element will have slightly different atomic masses.\\n3.  **Stability/Radioactivity:** The neutron-to-proton ratio affects the stability of the nucleus. Some isotopes are stable, while others are unstable and undergo radioactive decay (radioisotopes).\\n4.  **Physical Properties:** Differences in mass can lead to minor differences in physical properties such as density, diffusion rates, and melting/boiling points, though these are often subtle.\\n\\nDespite these differences, isotopes are still considered the same element because **the number of protons determines an atom's identity**. Since isotopes of a given element all have the same number of protons, they possess the same atomic number and thus exhibit nearly identical chemical properties, as chemical behavior is dictated by the electron configuration, which is determined by the number of protons."
  },
  {
    "question": "How do ions and isotopes relate to atomic number and mass number ➕➖⚛️?",
    "answer": "Ions and isotopes both represent variations of atoms, but they stem from changes in different subatomic particles, which directly relates to their effect on atomic number and mass number:\\n\\n*   **Atomic Number (Z):** This is the number of protons in an atom's nucleus. It is the defining characteristic of an element.
    *   **Ions and Atomic Number:** The formation of an ion involves the gain or loss of *electrons*, not protons. Therefore, ion formation **does not change the atomic number** of an atom. A sodium atom (Na) and a sodium ion (Na⁺) both have 11 protons, meaning they both have an atomic number of 11 and are both still sodium.
    *   **Isotopes and Atomic Number:** Isotopes by definition have the *same number of protons* and thus the *same atomic number*. For example, Carbon-12 and Carbon-14 both have 6 protons, so their atomic number is 6. This is why they are the same element.\\n\\n*   **Mass Number (A):** This is the total number of protons and neutrons in an atom's nucleus.\\n    *   **Ions and Mass Number:** Since ion formation only involves electrons (which have negligible mass compared to protons and neutrons), forming an ion **does not change the mass number** of an atom. A Na atom and a Na⁺ ion have the same number of protons and neutrons, and therefore the same mass number.\\n    *   **Isotopes and Mass Number:** Isotopes are defined by having a *different number of neutrons*. Because the mass number is the sum of protons and neutrons, a change in the number of neutrons directly leads to a **different mass number**. For instance, Carbon-12 has 6 protons + 6 neutrons = mass number 12, while Carbon-14 has 6 protons + 8 neutrons = mass number 14."
  },
  {
    "question": "Can an atom be both an ion and an isotope simultaneously? Provide an example to illustrate your answer.",
    "answer": "Yes, absolutely! An atom can indeed be both an ion and an isotope at the same time. The modifications that create an ion (change in electron count) and an isotope (change in neutron count) are independent of each other.\\n\\n*   **Ions** are formed by the gain or loss of **electrons**, which changes the overall electrical charge of the atom without altering its atomic number or mass number significantly.\\n*   **Isotopes** are atoms of the same element (same number of protons) but with different numbers of **neutrons**, which results in a different mass number but does not inherently change the charge.\\n\\n**Example:** Consider the element Chlorine (Cl).\\n\\n1.  **Chlorine Isotopes:** Chlorine naturally exists as two main isotopes: Chlorine-35 (³⁵Cl) and Chlorine-37 (³⁷Cl).\\n    *   ³⁵Cl has 17 protons and 18 neutrons (mass number = 35).\\n    *   ³⁷Cl has 17 protons and 20 neutrons (mass number = 37).\\n\\n2.  **Formation of Chloride Ion (Cl⁻):** A neutral chlorine atom (whether ³⁵Cl or ³⁷Cl) readily gains one electron to achieve a stable octet, forming a chloride ion (Cl⁻).\\n\\n    *   If a ³⁵Cl atom gains an electron, it becomes a **³⁵Cl⁻ ion**. This species is an isotope (Chlorine-35) and an ion (negatively charged, having gained an electron).\\n    *   Similarly, if a ³⁷Cl atom gains an electron, it becomes a **³⁷Cl⁻ ion**. This is also both an isotope (Chlorine-37) and an ion.\\n\\nBoth ³⁵Cl⁻ and ³⁷Cl⁻ are real chemical species that exist, demonstrating that an atom can concurrently be an isotopic variant and a charged ion."
  },
  {
    "question": "Discuss one practical application of isotopes ➕➖ and one practical application of understanding ion formation ⚛️.",
    "answer": "Understanding both isotopes and ion formation has numerous critical applications across various scientific and technological fields.\\n\\n**Practical Application of Isotopes: Carbon Dating 🗓️**\\nOne prominent application of isotopes is **Carbon-14 dating**, a radiometric dating method used to determine the age of organic materials. Carbon-14 (¹⁴C) is a naturally occurring radioactive isotope of carbon with a half-life of approximately 5,730 years. Living organisms continuously exchange carbon with the atmosphere, maintaining a relatively constant ratio of ¹⁴C to stable Carbon-12 (¹²C). When an organism dies, it stops taking in carbon, and the ¹⁴C within it begins to decay back into Nitrogen-14 (¹⁴N) at a predictable rate. By measuring the remaining ratio of ¹⁴C to ¹²C in an archaeological sample, scientists can calculate how many half-lives have passed and thus estimate the time since the organism's death. This technique is invaluable in archaeology, paleontology, and geology for dating ancient artifacts, fossils, and geological events within a range of about 50,000 years.\\n\\n**Practical Application of Understanding Ion Formation: Batteries 🔋**\\nUnderstanding how ions form and move is fundamental to the operation of **batteries** (electrochemical cells). Batteries generate electricity through chemical reactions that involve the transfer of electrons, which in turn leads to the formation and movement of ions. In a typical battery, such as a lithium-ion battery, lithium atoms at the anode lose electrons to become lithium ions (Li⁺), which then travel through an electrolyte (a substance containing mobile ions) to the cathode. At the cathode, these lithium ions gain electrons, completing the circuit and releasing electrical energy. The continuous movement of these ions within the electrolyte, coupled with electron flow in the external circuit, is what powers our electronic devices. The specific chemistry of ion formation and transport dictates a battery's voltage, capacity, and longevity."
  },
  {
    "question": "What are atoms 🤔, and how do they differ from elements and molecules?",
    "answer": "Atoms, elements, and molecules are fundamental concepts in chemistry, but they represent different levels of organization of matter.\\n\\n1.  **Atoms 🤔:** An atom is the smallest identifiable unit of an element that retains the chemical properties of that element. It's the basic building block of all matter. Atoms are composed of subatomic particles: protons, neutrons (forming the nucleus), and electrons (orbiting the nucleus). For example, a single oxygen atom (O) is the smallest unit of oxygen that still behaves like oxygen.\\n\\n2.  **Elements ⚛️:** An element is a pure substance consisting only of atoms that all have the same number of protons in their atomic nuclei (i.e., the same atomic number). Elements cannot be broken down into simpler substances by ordinary chemical means. Each element has a unique name and symbol (e.g., Hydrogen (H), Oxygen (O), Gold (Au)). The periodic table organizes all known elements based on their atomic number and electron configurations. An element can exist as individual atoms (like Argon gas) or as molecules formed from identical atoms (like O₂ or N₂).\\n\\n3.  **Molecules ↔️:** A molecule is a group of two or more atoms held together by chemical bonds. These atoms can be of the same element or different elements. Molecules are the smallest unit of a compound that retains the chemical properties of that compound. For instance:\\n    *   An oxygen molecule (O₂) consists of two oxygen atoms bonded together.\\n    *   A water molecule (H₂O) consists of two hydrogen atoms and one oxygen atom bonded together. This is also a **compound** because it contains two different elements."
  }
]
\`\`\``,
        },
        ],
      },
    ],
  });