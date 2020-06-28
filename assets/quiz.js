/*
-Make start button start working, by prompting first question (function)
-when answer is clicked:
+JS will determine if the option they clicked was true or false
+message is displayed, letting player know if their answer was correct or not (for a limited time)
+IF wrong, time will be reduced, and points will be deducted
+IF correct, points will be added to score
+Whenever answer is clicked, next question is displayed
*/
const startButton = document.getElementById('start-btn-id')
const startContainer =document.getElementById('start-btn-container')
const questionContainer = document.getElementById('quiz')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer')
// const answerButtons = document.getElementById('answer-buttons')

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("game has started")
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    //This function declaration below updates the question
    startQuestion()
}

function startQuestion(question) {
    questionElement.innerText = questions[0]["question"];
    answerElement.innerText = questions[0][1];

}

// function addAnswerButtons(answers) {
//     answerButtons = document.createElement("button")
//     answerButtons.innerHTML = questions[0][1];
    
// }

function selectAnswer() {

}


//this is an array of questions
const questions = [
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parenthases", correct: true },
            { text: "square brackets", correct: false },
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<scripting>", correct: false },
            { text: "<script>", correct: true },
            { text: "You can put it anywhere", correct: false },
            { text: "<style>", correct: false },
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: 'alert("Hello World");', correct: true },
            { text: 'msg("Hello World");', correct: false },
            { text: 'alertBox("Hello World");', correct: false },
            { text: 'msgBox("Hello World");', correct: false },
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { text: "for (i=0; i <= 5;i++)", correct: true },
            { text: "for i=1 to 5", correct: false },
            { text: "for (i<=5; i++)", correct: false },
            { text: "for (i=0; i <= 5)", correct: false },
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "<!--This is a comment-->", correct: false },
            { text: "'This is a comment", correct: false },
            { text: "(This is a comment)", correct: false },
            { text: "//This is a comment", correct: true },
        ]
    }


]