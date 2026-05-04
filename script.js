<<<<<<< HEAD
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
=======
>>>>>>> fc565ea (Day 2: Save logic and styles)
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
<<<<<<< HEAD
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
=======
            currentInput = "";
        } 
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } 
        else {
            // Prevent adding after error
            if (currentInput === "Error") {
                currentInput = "";
            }
            currentInput += value;
        }

        display.value = currentInput;
    });
>>>>>>> fc565ea (Day 2: Save logic and styles)
});