const quizData = [
    {
        question: 'How old is Shifa?',
        a: '10',
        b: '16',
        c: '21',
        d: '87',
        correct: 'c'
    }, {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'   
    }, {
        question: 'Who is the President of US?',
        a: 'Shifa Shaikh',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1990',
        b: '1995',
        c: '1996',
        d: 'None of the above',
        correct: 'b'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
        answerEl.checked = false;
        }
});
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

        if(answer){
            if (answer === quizData[currentQuiz].correct){
                score++;
            }

            currentQuiz++;
            if(currentQuiz < quizData.length) {
                loadQuiz();
         } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} 
                questions.</h2>
                
                <button onclick="location.reload()
                ">Reload</button
            `;
        }
   }

});





