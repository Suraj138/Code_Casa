const userInput = document.querySelector("#degree");
const optionSelected = document.querySelector("#type");
const convertBtn = document.querySelector("#convert--btn");
const messageBox = document.querySelector("#message");
const conversionLog = document.querySelector("#conversion-log");

convertBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const selectedValue = optionSelected.value;
    const inputValue = Number(userInput.value);

    if (!inputValue) {
        messageBox.textContent = "Enter a valid number";
    } else {
        let convertedValue;
        let conversionDetails;

        if (selectedValue === "Fahrenheit") {
            convertedValue = (inputValue * 9) / 5 + 32;
            messageBox.textContent = `${convertedValue}°F`;
            conversionDetails = `${inputValue}°C is ${convertedValue}°F and ${inputValue}°C is ${inputValue + 273.15}°K`;
        } else if (selectedValue === "Celsius") {
            convertedValue = inputValue;
            messageBox.textContent = `${convertedValue}°C`;
            conversionDetails = `${inputValue}°C is ${inputValue * 9 / 5 + 32}°F and ${inputValue}°C is ${inputValue + 273.15}°K`;
        } else if (selectedValue === "Kelvin") {
            convertedValue = inputValue + 273.15;
            messageBox.textContent = `${convertedValue}°K`;
            conversionDetails = `${inputValue}°K is ${(inputValue - 273.15) * 9 / 5 + 32}°F and ${inputValue - 273.15}°K is ${inputValue - 273.15}°C`;
        }

        // Log the conversion details
        logConversion(conversionDetails);
    }
});

function logConversion(conversionDetails) {
    const conversionInfo = document.createElement("li");
    conversionInfo.textContent = conversionDetails;

    // Append the conversion details to the log
    conversionLog.appendChild(conversionInfo);
}
