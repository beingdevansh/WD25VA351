const quizData = [
    {
        question: "Which language is used to structure a web page?",
        options: ["HTML", "CSS", "Python", "Java"],
        answer: "HTML"
    },
    {
        question: "Which language is used to style a web page?",
        options: ["HTML", "CSS", "C++", "Java"],
        answer: "CSS"
    },
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processing Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "Which of the following is an operating system?",
        options: ["Windows", "Google", "Python", "HTML"],
        answer: "Windows"
    },
    {
        question: "Which symbol is used for comments in C++?",
        options: ["//", "##", "''' '''", "**"],
        answer: "//"
    }
];

const keys = ["A", "B", "C", "D"];

let studentName = "";
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 60;
let isAnswered = false;

const studentSection = document.getElementById("studentSection");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const questionContainer = document.getElementById("questionContainer");
const questionCounter = document.getElementById("questionCounter");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("nextButton");

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    studentName = document.getElementById("name").value.trim();
    studentSection.style.display = "none";
    quizSection.style.display = "block";
    loadQuestion(0);
});

function loadQuestion(index) {
    currentIndex = index;
    isAnswered = false;
    resetTimer();

    const data = quizData[index];
    questionCounter.textContent = `Question ${index + 1} of ${quizData.length}`;
    nextButton.textContent = (index === quizData.length - 1) ? "Finish Quiz" : "Next Question";

    let optionsHtml = "";
    data.options.forEach((opt, i) => {
        optionsHtml += `
            <div class="option" onclick="selectAnswer(${i})">
                <span class="key">${keys[i]}</span>
                <span>${opt}</span>
            </div>
        `;
    });

    questionContainer.innerHTML = `
        <div class="question">
            <p>${index + 1}. ${data.question}</p>
            <div class="options-list">${optionsHtml}</div>
        </div>
    `;
}

function selectAnswer(selectedIndex) {
    if (isAnswered) return;


    isAnswered = true;
    clearInterval(timer);

    const data = quizData[currentIndex];
    const optionCards = document.querySelectorAll(".option");

    if (data.options[selectedIndex] === data.answer) {
        optionCards[selectedIndex].classList.add("correct");
        score++;
    } else {
        if (selectedIndex !== -1) {
            optionCards[selectedIndex].classList.add("wrong");
        }

        const correctIndex = data.options.indexOf(data.answer);
        optionCards[correctIndex].classList.add("correct");
    }

    optionCards.forEach(card => card.style.pointerEvents = "none");

    setTimeout(nextQuestion, 1200);


}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 60;
    renderTimerDisplay();


    timer = setInterval(() => {
        timeLeft--;
        renderTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer(-1);
        }
    }, 1000);


}

function renderTimerDisplay() {
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const secs = String(timeLeft % 60).padStart(2, "0");


    timerElement.textContent = `${mins}:${secs} `;
    timerElement.classList.toggle("warning", timeLeft <= 10);


}

function nextQuestion() {
    if (currentIndex < quizData.length - 1) {
        loadQuestion(currentIndex + 1);
    } else {
        endQuiz();
    }
}

nextButton.addEventListener("click", () => {
    if (!isAnswered) {
        selectAnswer(-1);
    } else {
        nextQuestion();
    }
});

document.addEventListener("keydown", (e) => {
    if (quizSection.style.display !== "block") return;


    const keyMap = {
        "1": 0,
        "a": 0,
        "2": 1,
        "b": 1,
        "3": 2,
        "c": 2,
        "4": 3,
        "d": 3
    };

    const index = keyMap[e.key.toLowerCase()];

    if (index !== undefined) {
        selectAnswer(index);
    }


});

function endQuiz() {
    clearInterval(timer);
    quizSection.style.display = "none";
    resultSection.style.display = "block";


    document.getElementById("studentName").textContent = `Thank you, ${studentName} !`;
    document.getElementById("score").textContent = `Your Score: ${score} / ${quizData.length}`;


}