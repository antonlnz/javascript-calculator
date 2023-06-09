const txtOp1 = document.getElementById("op1")
const txtOperation = document.getElementById("operation")
const txtOp2 = document.getElementById("op2")
const btnCalculate = document.getElementById("calculate")
const pResult = document.getElementById("result")

btnCalculate.addEventListener('click', calculate)

function calculate() {
    const operation = txtOperation.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operation == "+" || operation == "-" || operation == "*" || operation == "/") && !isNaN(op1) && !isNaN(op2)) {
        let result;
        switch (operation) {
            case "+":
                result = op1 + op2
                break;
            case "-":
                result = op1 - op2
                break;
            case "*":
                result = op1*op2
                break;
            case "/":
                result = op1/op2
                break
        }
        pResult.style = "color:black"
        pResult.innerText = "= " + result
    } else {
        pResult.style = "color:red"
        pResult.innerText = "Impossible calculation"
    }
}