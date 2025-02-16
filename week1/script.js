function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

function calculateFactorial(method) {
    let num = document.getElementById("numberInput").value;
    let resultText = document.getElementById("result");

    if (num === "" || isNaN(num) || num < 0 || !Number.isInteger(Number(num))) {
        resultText.innerHTML = "Please enter a valid positive integer.";
        return;
    }

    num = parseInt(num);
    let result = method === "iterative" ? factorialIterative(num) : factorialRecursive(num);
    
    resultText.innerHTML = `Factorial of ${num} (${method} method) is: ${result}`;
}
