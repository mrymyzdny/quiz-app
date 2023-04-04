let $ = document

const answerA = $.querySelector('#a-text')
const answerB = $.querySelector('#b-text')
const answerC = $.querySelector('#c-text')
const answerD = $.querySelector('#d-text')
const appWrap = $.querySelector('.app-wrap')
const startBtn = $.querySelector('.start-btn')
const appStart = $.querySelector('.app-start')
const nextBtn = $.querySelector('.next-btn')
const inputEls = $.querySelectorAll('input')
const quizText = $.querySelector('.quiz-text')
const appEnd = $.querySelector('.app-end')
const endBtn= $.querySelector('.end-btn')
const resultText = $.querySelector('.result-text')


const allQuestion = [
    {
        question: "Which language runs in a web browser?",
        a: "javascript",
        b: "C",
        c: "C++",
        d: "java" ,
        correct: "a",
    },
    {
        question: "Which JavaScript Engine developed for Chrome?",
        a: "Chakra",
        b: "JavaScriptCore",
        c: "SpiderMonkey",
        d: "V8",
        correct: "d",
    },
    {
        question: "What does HTML stand for ?",
        a: "high tech markup language" ,
        b: "hyper tech markup language" ,
        c: "hyper text markup language",
        d: "hyper text making language",
        correct : "c"
    },
    {
        question: "What does CSS stand for ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
]

let currentQuiz = 0
let score = 0

// Show The Quiz Details
loadQuiz()

function loadQuiz () {
    let currentQuizData = allQuestion[currentQuiz]
    quizText.innerHTML = currentQuizData.question
    answerA.innerHTML = currentQuizData.a
    answerB.innerHTML = currentQuizData.b
    answerC.innerHTML = currentQuizData.c
    answerD.innerHTML = currentQuizData.d
}


//  Get The User Answer
function getAnswer () {

    let answer 

    inputEls.forEach(inputEl => {
        if (inputEl.checked) {
            answer = inputEl.id
        }
    })
    return answer
}


// Next Question
function nextQuestion () {
    let answer = getAnswer()
    if (answer) {
        if (answer === allQuestion[currentQuiz].correct) {
            console.log(answer === allQuestion[currentQuiz].correct);
            console.log(currentQuiz);
            score++
        }

        currentQuiz++

    } else {
        alert('Choose an option !!')
    }

    if (currentQuiz < allQuestion.length) {
        loadQuiz()
        deselectAnswers()

    } else {
        appWrap.classList.add('hide')
        appEnd.classList.remove('hide')
        resultText.innerHTML = `your score is  ${ score }  /  4 .`
    }
}

// Deselect The Answers
function deselectAnswers () {
    inputEls.forEach(inputEl => {
        inputEl.checked = false
    })
}

// Start The Quiz 
startBtn.addEventListener('click' , () => {
    appStart.classList.add('hide')
    appWrap.classList.remove('hide')
})

// Next Handler
nextBtn.addEventListener('click' , () => {
    nextQuestion()
})