const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            currentInput = "";
        } 
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } 
        else if (value === "√") {
            currentInput = Math.sqrt(eval(currentInput)).toString();
        } 
        else if (value === "x²") {
            currentInput = Math.pow(eval(currentInput), 2).toString();
        } 
        else if (value === "%") {
            currentInput = (eval(currentInput) / 100).toString();
        } 
        else if (value === "^") {
            currentInput += "**"; // JS power operator
        } 
        else {
            if (currentInput === "Error") {
                currentInput = "";
            }
            currentInput += value;
        }

        display.value = currentInput;
    });
});