const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            currentInput = "";
        } else if (value === "=") {
            try {
                // The eval function calculates the string
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else {
            if (currentInput === "Error") {
                currentInput = "";
            }
            currentInput += value;
        }

        display.value = currentInput;
    });
});