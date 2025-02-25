document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("login-error");

            if (username === "tayyab" && password === "1234") {
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                errorMessage.textContent = "Invalid username or password!";
            }
        });
    }
});



function analyzeXray() {
    const uploadInput = document.getElementById("xray-upload");
    const resultText = document.getElementById("result");
    const previewImage = document.getElementById("xray-preview");

    if (uploadInput.files.length > 0) {
        previewImage.src = URL.createObjectURL(uploadInput.files[0]);
        previewImage.style.display = "block";

        setTimeout(() => {
            // Simulated AI Result
            const results = ["Fracture Detected", "Pneumonia Detected", "No Issues Found"];
            const randomResult = results[Math.floor(Math.random() * results.length)];
            resultText.textContent = `Diagnosis: ${randomResult}`;
        }, 2000); // Simulate AI processing time
    } else {
        alert("Please upload an X-ray image.");
    }
}

function logout() {
    window.location.href = "login.html"; // Redirect to login page
}
