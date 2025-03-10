let num1 = prompt("Insertar primer valor");
let num2 = prompt("Insertar segundo valor");
let operacion = prompt("Insertar operación");
let resultado;

if (operacion === "+"){
    resultado = Number(num1) + Number(num2)
}
else if (operacion === "-"){
    resultado = Number(num1) - Number(num2)
}
else if (operacion === "*"){
    resultado = Number(num1) * Number(num2)
}
else if (operacion === "/"){
    resultado = Number(num1) / Number(num2)
}


alert(resultado)