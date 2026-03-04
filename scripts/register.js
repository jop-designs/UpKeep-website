document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const successMsg = document.getElementById("success-msg");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload
            form.reset(); // Clear all form fields

            // Display success message
            if (successMsg) {
                successMsg.style.display = "block";
            }
        });
    }
});
