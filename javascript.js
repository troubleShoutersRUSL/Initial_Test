// script.js
const allQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 4
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
        correct: 3
    },
    {
        question: "What is the boiling point of water?",
        answers: ["90°C", "100°C", "110°C", "120°C"],
        correct: 2
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "Leo Tolstoy", "William Shakespeare", "Mark Twain"],
        correct: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Fe", "Hg"],
        correct: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Gold", "Iron", "Diamond", "Quartz"],
        correct: 3
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "South Korea", "India"],
        correct: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 3
    },
    {
        question: "Who developed the theory of relativity?",
        answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        correct: 3
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correct: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"],
        correct: 4
    },
    {
        question: "What is the smallest prime number?",
        answers: ["0", "1", "2", "3"],
        correct: 3
    },
    {
        question: "What is the capital city of Australia?",
        answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        correct: 4
    },
    {
        question: "What is the largest bone in the human body?",
        answers: ["Femur", "Tibia", "Humerus", "Skull"],
        correct: 1
    },
    {
        question: "Who is the author of '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "F. Scott Fitzgerald", "J.D. Salinger"],
        correct: 1
    },
    {
        question: "What is the speed of light?",
        answers: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
        correct: 1
    },
    {
        question: "What is the largest desert in the world?",
        answers: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        correct: 4
    },
    {
        question: "Which element has the atomic number 1?",
        answers: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
const totalQuestions = 10;
let selectedAnswers = Array(totalQuestions).fill(null);

function displayQuestion(index) {
    const question = allQuestions[index];
    const quizContainer = document.getElementById('quiz-container');
    
    quizContainer.innerHTML = `
        <div class="question">
            <h2>Q${index + 1}: ${question.question}</h2>
            <ul class="answers">
                ${question.answers.map((answer, i) => `
                    <li>
                        <label>
                            <input type="radio" name="question${index}" value="${i + 1}" ${selectedAnswers[index] === i + 1 ? 'checked' : ''}>
                            ${answer}
                        </label>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    document.getElementById('prev-btn').style.display = index > 0 ? 'inline-block' : 'none';
    document.getElementById('next-btn').style.display = index < totalQuestions - 1 ? 'inline-block' : 'none';
    document.getElementById('submit-btn').style.display = index === totalQuestions - 1 ? 'inline-block' : 'none';
}

function showNextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function showPreviousQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }

    console.log(selectedAnswers);  // Replace this with your logic to handle the submission

    alert('Quiz submitted!');
}

window.onload = () => {
    const shuffledQuestions = shuffle(allQuestions).slice(0, totalQuestions);
    displayQuestion(currentQuestionIndex);
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Calculate score function (same as before)
function calculateScore() {
    let score = 0;
    for (let i = 0; i < totalQuestions; i++) {
        const correctAnswerIndex = allQuestions[i].correct - 1; // Correct answer index (0-based)
        if (selectedAnswers[i] === correctAnswerIndex + 1) {
            score++;
        }
    }
    return score;
}

// Function to determine user's level
function determineLevel(score) {
    if (score <= 5) {
        return "Average";
    } else {
        return "Good";
    }
}

// Function to display the modal
function displayModal() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const score = calculateScore();
    const level = determineLevel(score);
    const scoreText = document.getElementById("score-text");
    const levelText = document.getElementById("level-text");

    modal.style.display = "block";
    scoreText.textContent = `Your score: ${score} out of ${totalQuestions}`;
    levelText.textContent = `Your level: ${level}`;

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function () {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Call displayModal function after submitting the quiz
function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }

    displayModal(); // Show the modal
}
