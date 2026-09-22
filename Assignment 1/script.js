let studentName = "";

document.getElementById("StudentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    studentName = document.getElementById("name").value;

    document.getElementById("studentSection").style.display = "none";

    document.getElementById("quizSection").style.display = "block";

});


function submitQuiz() {

    let score = 0;

    let answers = {
        q1: "HTML",
        q2: "CSS",
        q3: "Central Processing Unit",
        q4: "Windows",
        q5: "//"
    };


    for (let question in answers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }

    }

    document.getElementById("quizSection").style.display = "none";


    document.getElementById("resultSection").style.display = "block";


    document.getElementById("studentName").innerText =
        "Thank you, " + studentName + "!";


    document.getElementById("score").innerText =
        "Your Score: " + score + " / 5";


    document.getElementById("message").innerText =
        "Your quiz has been submitted successfully.";

}