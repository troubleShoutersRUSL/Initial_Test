// dashboard.js

// Function to fetch quiz results (Assuming you have a way to retrieve stored results)
function fetchQuizResults() {
    // Sample data - replace this with your actual data retrieval logic
    const quizResults = [
        { quizName: "General Knowledge", score: 7, totalQuestions: 10 },
        { quizName: "Science Quiz", score: 8, totalQuestions: 10 },
        // Add more quiz results as needed
    ];

    return quizResults;
}

// Function to display quiz results on the dashboard
function displayQuizResults() {
    const quizResults = fetchQuizResults(); // Fetch quiz results

    const quizResultsContainer = document.getElementById("quizResults");

    // Clear previous content
    quizResultsContainer.innerHTML = "";

    // Iterate over quiz results and create elements to display them
    quizResults.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result");

        const quizName = document.createElement("h3");
        quizName.textContent = result.quizName;

        const scoreInfo = document.createElement("p");
        scoreInfo.textContent = `Score: ${result.score}/${result.totalQuestions}`;

        resultElement.appendChild(quizName);
        resultElement.appendChild(scoreInfo);

        quizResultsContainer.appendChild(resultElement);
    });
}

// Call displayQuizResults when the page loads
window.onload = function() {
    displayQuizResults();
};
