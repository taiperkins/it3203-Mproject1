// Wait until the webpage is fully loaded before running the quiz code
document.addEventListener("DOMContentLoaded", function () {

    // Store important quiz elements
    const form = document.getElementById("quizForm");
    const resetBtn = document.getElementById("resetBtn");

    const resultsBox = document.getElementById("results");
    const overallResult = document.getElementById("overallResult");
    const totalScore = document.getElementById("totalScore");
    const detailedResults = document.getElementById("detailedResults");

    // Only run this JavaScript on the quiz page
    if (form) {

        // Run this function when the quiz is submitted
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let score = 0;
            const total = 5;
            let output = "";

            // Correct answers for the quiz
            const correctQ1 = "structure";
            const correctQ2 = "CSS";
            const correctQ3 = "JavaScript";
            const correctQ4 = "Media Queries";
            const correctQ5 = ["flexible images", "media queries", "readable text"];

            // Get answer for question 1
            const q1 = document.getElementById("q1").value.trim().toLowerCase();

            // Get selected radio button answers
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');
            const q4 = document.querySelector('input[name="q4"]:checked');

            const q2Val = q2 ? q2.value : "";
            const q3Val = q3 ? q3.value : "";
            const q4Val = q4 ? q4.value : "";

            // Get selected checkbox answers
            const q5Checked = document.querySelectorAll('input[name="q5"]:checked');
            let q5 = [];

            q5Checked.forEach(function (item) {
                q5.push(item.value);
            });

            q5.sort();
            correctQ5.sort();

            // Check question 1
            if (q1 === correctQ1) {
                score++;
                output += "<p class='correct'>Q1: Correct. Answer: structure</p>";
            } else {
                output += "<p class='incorrect'>Q1: Incorrect. Correct answer: structure</p>";
            }

            // Check question 2
            if (q2Val === correctQ2) {
                score++;
                output += "<p class='correct'>Q2: Correct. Answer: CSS</p>";
            } else {
                output += "<p class='incorrect'>Q2: Incorrect. Correct answer: CSS</p>";
            }

            // Check question 3
            if (q3Val === correctQ3) {
                score++;
                output += "<p class='correct'>Q3: Correct. Answer: JavaScript</p>";
            } else {
                output += "<p class='incorrect'>Q3: Incorrect. Correct answer: JavaScript</p>";
            }

            // Check question 4
            if (q4Val === correctQ4) {
                score++;
                output += "<p class='correct'>Q4: Correct. Answer: Media Queries</p>";
            } else {
                output += "<p class='incorrect'>Q4: Incorrect. Correct answer: Media Queries</p>";
            }

            // Check question 5
            if (q5.join(",") === correctQ5.join(",")) {
                score++;
                output += "<p class='correct'>Q5: Correct. Answers: flexible images, media queries, readable text</p>";
            } else {
                output += "<p class='incorrect'>Q5: Incorrect. Correct answers: flexible images, media queries, readable text</p>";
            }

            // Decide pass or fail
            let resultText = "";

            if (score >= 3) {
                resultText = "<p class='pass'>PASS</p>";
            } else {
                resultText = "<p class='fail'>FAIL</p>";
            }

            // Show results on the page
            overallResult.innerHTML = "<h3>Overall Result</h3>" + resultText;
            totalScore.innerHTML = "<h3>Score: " + score + " / " + total + "</h3>";
            detailedResults.innerHTML = "<h3>Details</h3>" + output;

            resultsBox.classList.remove("hidden");
        });

        // Reset the quiz and hide the results
        resetBtn.addEventListener("click", function () {
            form.reset();

            overallResult.innerHTML = "";
            totalScore.innerHTML = "";
            detailedResults.innerHTML = "";

            resultsBox.classList.add("hidden");
        });
    }
});