const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btncalc = document.getElementById("Calcular")
const presultado = document.getElementById("resultado")

btncalc.addEventListener("click", calcular)

function calcular(){
    const operador = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operador == "+" || operador == "-" || operador == "*" || operador == "/" ) && !isNaN(op1) || !isNaN(op2) ){
        let resultado;
        switch (operador){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break
            case "/":
                resultado = op1 / op2 
                break           
        }
        presultado.style = "color:black"
        presultado.innerText = "= " + resultado
    }else {
        presultado.style = "color:red"
        presultado.innerText = "Calculo imposible"
    }
}