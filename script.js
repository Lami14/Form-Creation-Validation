document.addEventListener("DOMContentLoaded", function () {
    // ✅ Wrap all in DOMContentLoaded
    const form = document.getElementById("registration-form"); // ✅ Form Selection
    const feedbackDiv = document.getElementById("form-feedback"); // ✅ Feedback Div Selection

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // ✅ Retrieve User Inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        const messages = []; // ✅ For error messages

        // ✅ Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // ✅ Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push("Email must be valid and contain '@' and '.'.");
        }

        // ✅ Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // ✅ Feedback Display Logic
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red (Bootstrap danger)
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
