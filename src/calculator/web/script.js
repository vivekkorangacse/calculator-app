function calculate(operation) {

    let num1 = parseFloat(
        document.getElementById("num1").value
    );

    let num2 = parseFloat(
        document.getElementById("num2").value
    );

    let result;

    if (isNaN(num1) || isNaN(num2)) {

        document.getElementById("result").innerText =
            "Please enter both numbers.";

        return;
    }

    if (operation === "add") {
        result = num1 + num2;
    }

    else if (operation === "subtract") {
        result = num1 - num2;
    }

    else if (operation === "multiply") {
        result = num1 * num2;
    }

    else if (operation === "divide") {

        if (num2 === 0) {
            document.getElementById("result").innerText =
                "Cannot divide by zero.";
            return;
        }

        result = num1 / num2;
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}