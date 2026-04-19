// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get elements from the page
    const form = document.getElementById("quizForm");
    const resetBtn = document.getElementById("resetBtn");

    const resultsBox = document.getElementById("results");
    const overallResult = document.getElementById("overallResult");
    const totalScore = document.getElementById("totalScore");
    const detailedResults = document.getElementById("detailedResults");

    // Only run if we're on the quiz page
    if (form) {

        // When quiz is submitted
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // stop page refresh

            let score = 0;
            const total = 5;
            let output = "";

            // Correct answers
            const correctQ1 = "stateless";
            const correctQ2 = "HTTPS";
            const correctQ3 = "HTTP/2";
            const correctQ4 = "UDP";
            const correctQ5 = ["authentication", "encryption", "integrity"];

            // Get user answers
            const q1 = document.getElementById("q1").value.trim().toLowerCase();

            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');
            const q4 = document.querySelector('input[name="q4"]:checked');

            const q2Val = q2 ? q2.value : "";
            const q3Val = q3 ? q3.value : "";
            const q4Val = q4 ? q4.value : "";

            // Get checkbox answers
            const q5Checked = document.querySelectorAll('input[name="q5"]:checked');
            let q5 = [];

            q5Checked.forEach(function (item) {
                q5.push(item.value);
            });

            // Sort for comparison
            q5.sort();
            correctQ5.sort();

            // Question 1
            if (q1 === correctQ1) {
                score++;
                output += "<p class='correct'>Q1: Correct (Answer: stateless)</p>";
            } else {
                output += "<p class='incorrect'>Q1: Incorrect (Correct: stateless)</p>";
            }

            // Question 2
            if (q2Val === correctQ2) {
                score++;
                output += "<p class='correct'>Q2: Correct (Answer: HTTPS)</p>";
            } else {
                output += "<p class='incorrect'>Q2: Incorrect (Correct: HTTPS)</p>";
            }

            // Question 3
            if (q3Val === correctQ3) {
                score++;
                output += "<p class='correct'>Q3: Correct (Answer: HTTP/2)</p>";
            } else {
                output += "<p class='incorrect'>Q3: Incorrect (Correct: HTTP/2)</p>";
            }

            // Question 4
            if (q4Val === correctQ4) {
                score++;
                output += "<p class='correct'>Q4: Correct (Answer: UDP)</p>";
            } else {
                output += "<p class='incorrect'>Q4: Incorrect (Correct: UDP)</p>";
            }

            // Question 5 (multi-select)
            if (q5.join(",") === correctQ5.join(",")) {
                score++;
                output += "<p class='correct'>Q5: Correct (Answers: encryption, authentication, integrity)</p>";
            } else {
                output += "<p class='incorrect'>Q5: Incorrect (Correct: encryption, authentication, integrity)</p>";
            }

            // Pass or Fail
            let resultText = "";
            if (score >= 3) {
                resultText = "<p class='pass'>PASS</p>";
            } else {
                resultText = "<p class='fail'>FAIL</p>";
            }

            // Display results
            overallResult.innerHTML = "<h3>Overall Result</h3>" + resultText;
            totalScore.innerHTML = "<h3>Score: " + score + " / " + total + "</h3>";
            detailedResults.innerHTML = "<h3>Details</h3>" + output;

            resultsBox.classList.remove("hidden");
        });

        // Reset button
        resetBtn.addEventListener("click", function () {
            form.reset();

            overallResult.innerHTML = "";
            totalScore.innerHTML = "";
            detailedResults.innerHTML = "";

            resultsBox.classList.add("hidden");
        });
    }
});