// scripts.js
let currentQuestionIndex = 0;
let score = 0;
let selectedQuiz = "";
let username = "";

const quizzes = {
  "data-structures": [
    {
      question: "What is a linked list?",
      options: [
        "A sequence of elements in contiguous memory",
        "A sequence of elements where each element points to the next",
        "A collection of key-value pairs",
        "A set of unique elements",
      ],
      correct: 1,
    },
    {
      question:
        "What is the time complexity of accessing an element in an array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correct: 0,
    },
    {
      question: "What is a binary tree?",
      options: [
        "A tree with at most two children for each node",
        "A tree where each node has exactly two children",
        "A tree with binary data",
        "A balanced tree",
      ],
      correct: 0,
    },
    {
      question: "What is a stack?",
      options: ["LIFO", "FIFO", "BOTH", "NONE"],
      correct: 0,
    },
    {
      question: "What is a queue?",
      options: ["LIFO", "FIFO", "BOTH", "NONE"],
      correct: 1,
    },
    {
      question: "What is the purpose of a hash function?",
      options: [
        "To sort data",
        "To search data",
        "To map data to a fixed size value",
        "To encode data",
      ],
      correct: 2,
    },
    {
      question: "What is a graph?",
      options: [
        "A collection of nodes connected by edges",
        "A set of unique elements",
        "A type of tree",
        "A hierarchical data structure",
      ],
      correct: 0,
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correct: 2,
    },
    {
      question: "What is a doubly linked list?",
      options: [
        "A list where each node points to the next and previous nodes",
        "A list with double the elements",
        "A binary tree",
        "A set of linked nodes",
      ],
      correct: 0,
    },
    {
      question: "What is a heap?",
      options: [
        "A binary tree with a specific order property",
        "A linked list with a specific order",
        "A set of unique elements",
        "A type of hash table",
      ],
      correct: 0,
    },
  ],

  databases: [
    {
      question: "What is a primary key?",
      options: ["Unique", "Duplicate", "Null", "None"],
      correct: 0,
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Query Language",
        "Sequential Query Language",
      ],
      correct: 0,
    },
    {
      question: "What is a foreign key?",
      options: [
        "A unique identifier",
        "A primary key in another table",
        "An attribute in a table",
        "A duplicate key",
      ],
      correct: 1,
    },
    {
      question: "What is normalization?",
      options: [
        "Data redundancy",
        "Organizing data to reduce redundancy",
        "Increasing data storage",
        "Encrypting data",
      ],
      correct: 1,
    },
    {
      question: "Which SQL clause is used to filter results?",
      options: ["SELECT", "WHERE", "FROM", "JOIN"],
      correct: 1,
    },
    {
      question: "What does ACID stand for in databases?",
      options: [
        "Automatic, Consistent, Isolated, Durable",
        "Atomicity, Consistency, Isolation, Durability",
        "Accessible, Consistent, Internal, Durable",
        "Available, Consistent, Isolated, Data",
      ],
      correct: 1,
    },
    {
      question: "What is an index in a database?",
      options: [
        "A duplicate key",
        "A file system",
        "A data structure to improve query performance",
        "A data normalization technique",
      ],
      correct: 3,
    },
    {
      question: "Which SQL keyword is used to sort results?",
      options: ["ORDER BY", "GROUP BY", "SORT", "FILTER"],
      correct: 0,
    },
    {
      question: "What is a join in SQL?",
      options: [
        "Combining rows from two or more tables",
        "Sorting data in a table",
        "Filtering data in a table",
        "Updating rows in a table",
      ],
      correct: 0,
    },
    {
      question: "What is a transaction in a database?",
      options: [
        "A unit of work performed within a database",
        "A table",
        "A query",
        "A data file",
      ],
      correct: 0,
    },
  ],

  react: [
    {
      question: "What is JSX in React?",
      options: [
        "JavaScript",
        "HTML",
        "Both JavaScript and HTML",
        "A templating language",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of `useState` in React?",
      options: [
        "To manage state in functional components",
        "To manage state in class components",
        "To handle side effects",
        "To fetch data",
      ],
      correct: 0,
    },
    {
      question: "What is a component in React?",
      options: [
        "A reusable piece of UI",
        "A JavaScript function",
        "A JavaScript class",
        "All of the above",
      ],
      correct: 3,
    },
    {
      question: "What is the Virtual DOM?",
      options: [
        "A lightweight copy of the actual DOM",
        "A part of the real DOM",
        "A JavaScript object",
        "A method to handle events",
      ],
      correct: 0,
    },
    {
      question: "What is `props` in React?",
      options: [
        "Properties passed to components",
        "Component state",
        "A type of component",
        "Event handlers",
      ],
      correct: 0,
    },
    {
      question: "What is `state` in React?",
      options: [
        "An object to store data that influences the output",
        "Static data",
        "A method",
        "An event",
      ],
      correct: 0,
    },
    {
      question: "What is the use of `useEffect` hook in React?",
      options: [
        "To manage side effects",
        "To fetch data",
        "To manage state",
        "To render components",
      ],
      correct: 0,
    },
    {
      question: "What is `React Router` used for?",
      options: [
        "Routing in single-page applications",
        "Handling state",
        "Fetching data",
        "Rendering components",
      ],
      correct: 0,
    },
    {
      question: "What is the purpose of `key` prop in React?",
      options: [
        "To identify unique elements",
        "To handle state",
        "To fetch data",
        "To manage components",
      ],
      correct: 0,
    },
    {
      question:
        "What is the difference between a class component and a functional component?",
      options: [
        "Class components can use lifecycle methods, functional components use hooks",
        "Class components handle state, functional components don't",
        "Both are the same",
        "None of the above",
      ],
      correct: 0,
    },
  ],

  java: [
    {
      question: "What is a constructor in Java?",
      options: [
        "A function",
        "A method",
        "A class",
        "A special method to initialize objects",
      ],
      correct: 3,
    },
    {
      question: "What is inheritance in Java?",
      options: [
        "Creating a new class from an existing class",
        "Hiding data",
        "Polymorphism",
        "Encapsulation",
      ],
      correct: 0,
    },
    {
      question: "What is an interface in Java?",
      options: [
        "A type of class",
        "A contract that classes can implement",
        "A method",
        "An abstract class",
      ],
      correct: 1,
    },
    {
      question: "What is JVM?",
      options: [
        "Java Virtual Machine",
        "Java Variable Management",
        "Java Version Manager",
        "Java Visual Mode",
      ],
      correct: 0,
    },
    {
      question: "What is polymorphism?",
      options: [
        "Multiple classes inheriting from one base class",
        "Multiple methods with the same name but different parameters",
        "Hiding data",
        "Inheritance",
      ],
      correct: 1,
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "0", "null"],
      correct: 1,
    },
    {
      question: "What is the purpose of the `final` keyword in Java?",
      options: [
        "To prevent inheritance",
        "To create constants",
        "To ensure immutability",
        "All of the above",
      ],
      correct: 3,
    },
    {
      question: "What is garbage collection in Java?",
      options: [
        "Manual memory management",
        "Automatic memory management",
        "Memory allocation",
        "Memory leakage",
      ],
      correct: 1,
    },
    {
      question: "What is the difference between `==` and `equals()` in Java?",
      options: [
        "Both are used to compare objects",
        "`==` compares references, `equals()` compares values",
        "`==` compares values, `equals()` compares references",
        "Both are used to compare values",
      ],
      correct: 1,
    },
    {
      question: "What is a package in Java?",
      options: [
        "A collection of classes and interfaces",
        "A single class",
        "A method",
        "An object",
      ],
      correct: 0,
    },
  ],
};

let timer;
let timeLeft = 15;

function startTimer() {
  timeLeft = 15;
  document.getElementById("time").textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function updateProgressBar() {
  let totalQuestions = quizzes[selectedQuiz].length;
  let progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  document.getElementById("progress-bar").innerHTML =
    '<span style="width:' + progress + '%;"></span>';
}

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

function saveScore(username, score) {
  leaderboard.push({ username, score });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function displayLeaderboard() {
  let leaderboardHTML = "<ul>";
  leaderboard.forEach((entry) => {
    leaderboardHTML += `<li>${entry.username}: ${entry.score}</li>`;
  });
  leaderboardHTML += "</ul>";
  document.getElementById("leaderboard").innerHTML = leaderboardHTML;
}

function startQuiz() {
  username = document.getElementById("username").value;
  if (username) {
    document.getElementById("auth-page").style.display = "none";
    document.getElementById("quiz-selection-page").style.display = "flex";
  } else {
    alert("Please enter your name");
  }
}

function selectQuiz(quizType) {
  selectedQuiz = quizType;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz-selection-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "flex";
  document.getElementById("quiz-title").innerText = quizType
    .replace("-", " ")
    .toUpperCase();
  showQuestion();
  startTimer();
  updateProgressBar();
}

function showQuestion() {
  const questionData = quizzes[selectedQuiz][currentQuestionIndex];
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
        <div style = "
        all: unset;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.9rem;
        font-weight: 800;
        margin-bottom:2px;
        font: bolder; ">${questionData.question}</div>
        ${questionData.options
          .map(
            (option, index) => `
            <div class="option-container">
                <input type="radio" name="option" value="${index}" id="option${index}" onchange="checkAnswer(${index})">
                <label for="option${index}">${option}</label>
            </div>
        `
          )
          .join("")}
    `;
  document.getElementById("prev-btn").style.display =
    currentQuestionIndex === 0 ? "none" : "inline-block";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("submit-btn").style.display =
    currentQuestionIndex === quizzes[selectedQuiz].length - 1
      ? "inline-block"
      : "none";
  updateProgressBar(); // Update progress bar
  startTimer(); // Start timer for current question
}

function checkAnswer(selectedIndex) {
  const questionData = quizzes[selectedQuiz][currentQuestionIndex];
  const options = document.querySelectorAll(".option-container");

  options.forEach((option, index) => {
    if (index === questionData.correct) {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }
  });

  if (selectedIndex === questionData.correct) {
    score++;
  }

  setTimeout(() => {
    if (currentQuestionIndex < quizzes[selectedQuiz].length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      submitQuiz();
    }
  }, 1000);
}

function nextQuestion() {
  if (currentQuestionIndex < quizzes[selectedQuiz].length - 1) {
    currentQuestionIndex++;
    showQuestion();
    startTimer(); // Restart timer for the next question
  } else {
    submitQuiz();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
    startTimer(); // Restart timer for the previous question
  }
}

function submitQuiz() {
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("result-page").style.display = "flex";
  document.getElementById("result-message").className = "result-message";
  document.getElementById(
    "result-message"
  ).innerText = `${username}, congratulations you have scored ${score}/${quizzes[selectedQuiz].length}.`;
  saveScore(username, score); // Save the score to leaderboard
  displayLeaderboard(); // Display the leaderboard
}

function goToMainPage() {
  document.getElementById("result-page").style.display = "none";
  document.getElementById("quiz-selection-page").style.display = "flex";
}



function goToStudyMaterials() {
  hideAllPages();
  document.getElementById('study-materials-page').style.display = 'block';
}

function goToMainPage() {
  hideAllPages();
  document.getElementById('quiz-selection-page').style.display = 'block';
}

function hideAllPages() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');
}
