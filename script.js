<<<<<<< HEAD
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                currentInput = eval(currentInput);
            } catch {
                currentInput = "Error";
            }
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });
=======
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
        currentInput = eval(currentInput);
    } catch {
        currentInput = "Error";
    }
} 
else {
    currentInput += value;
}

        display.value = currentInput;
    });
>>>>>>> 6d6cd42 (Initial local project files)
});