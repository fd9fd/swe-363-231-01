document.getElementById("fetchAdvice").addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            // Assuming the API returns advice in the "slip" object
            const advice = data.slip.advice;
            document.getElementById("adviceContainer").innerText = advice;
        })
        .catch((error) => {
            console.error("Error fetching advice:", error);
        });
});