document.addEventListener("DOMContentLoaded", function() {
    // Handle Subscribe Button Click
    const subscribeButton = document.querySelector(".button:nth-child(1)");
    subscribeButton.addEventListener("click", function() {
        alert("You have subscribed!");
    });

    // Handle Message Button Click
    const messageButton = document.querySelector(".button:nth-child(2)");
    messageButton.addEventListener("click", function() {
        alert("Message sent!");
    });

    // Update Analytics Counts
    const analyticsData = document.querySelectorAll(".analytics .data");
    analyticsData.forEach((data, index) => {
        data.addEventListener("click", function() {
            const numberElement = data.querySelector(".number");
            let currentNumber = parseInt(numberElement.textContent.replace('k', ''));
            numberElement.textContent = `${currentNumber + 1}k`;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Change button text based on the mode
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Switch to Light Mode";
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
        }
    });
});
