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
            display.classList.remove("error");
            try {
                let result = eval(currentInput);
                if (!isFinite(result)) {
                    currentInput = "Error";
                    display.classList.add("error");
                } else {
                    currentInput = result.toString();
                }
            } catch {
                currentInput = "Error";
                display.classList.add("error");
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
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        currentInput += key;
    } 
    else if (key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = "Error";
        }
    } 
    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
    } 
    else if (key === "Escape") {
        currentInput = "";
    }

    display.value = currentInput;
});