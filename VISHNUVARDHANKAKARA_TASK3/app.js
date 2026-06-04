const tempInput = document.getElementById("tempInput");
const cToF = document.getElementById("cToF");
const fToC = document.getElementById("fToC");
const resultText = document.getElementById("resultText");

cToF.addEventListener("click", () => {
    const temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
        resultText.textContent = "Please enter a valid temperature.";
        return;
    }

    const fahrenheit = (temp * 9 / 5) + 32;

    resultText.textContent =
        `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
});

fToC.addEventListener("click", () => {
    const temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
        resultText.textContent = "Please enter a valid temperature.";
        return;
    }

    const celsius = (temp - 32) * 5 / 9;

    resultText.textContent =
        `${temp}°F = ${celsius.toFixed(2)}°C`;
});