const prompt = require('prompt-sync')();

let precio;
let total=0;
let cantidad=0;

do{
    let entrada =prompt("Ingrese el precio del producto (0 para finalizar): ");

    if(entrada === null) {
        break;
    }
   
        precio =Number (entrada);

    if (entrada === "" || isNaN(precio) || precio < 0){
        console.log("Error: ingrese un precio valido");
    }
     else if (precio != 0){
        total = total + precio;
        cantidad++;
    }

} while (precio != 0);

console.log("RESUMEN DE LA COMPRA");
console.log("Cantidad de productos: " + cantidad);
console.log("Total a pagar: $" + total.toFixed(2));
