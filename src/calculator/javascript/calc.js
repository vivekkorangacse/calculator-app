const add = require("./add");
const subtraction = require("./subtraction");
const multiply = require("./multiply");
const division = require("./division");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

console.log("Select operation.");
console.log("1. Addition");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

async function calculator() {

    while (true) {

        const choice = await ask("Enter choice(1/2/3/4): ");

        if (["1", "2", "3", "4"].includes(choice)) {

            const num1 = parseFloat(
                await ask("Enter first number: ")
            );

            const num2 = parseFloat(
                await ask("Enter second number: ")
            );

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input. Please enter a number.");
                continue;
            }

            if (choice === "1") {
                console.log(
                    num1, "+", num2, "=",
                    add.add(num1, num2)
                );
            }

            else if (choice === "2") {
                console.log(
                    num1, "-", num2, "=",
                    subtraction.subtract(num1, num2)
                );
            }

            else if (choice === "3") {
                console.log(
                    num1, "*", num2, "=",
                    multiply.multiply(num1, num2)
                );
            }

            else if (choice === "4") {
                console.log(
                    num1, "/", num2, "=",
                    division.divide(num1, num2)
                );
            }

            const nextCalculation =
                await ask("Let's do next calculation? (yes/no): ");

            if (nextCalculation.toLowerCase() === "no") {
                break;
            }

        } else {
            console.log("Invalid Input");
        }
    }

    rl.close();
}

calculator();