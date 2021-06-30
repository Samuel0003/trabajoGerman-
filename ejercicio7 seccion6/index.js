/* Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero
*/


let promedio=0;
let cantidadDatos= 0;
let n;

do {
    n=parseInt(prompt("ingrese un digito"));
     
    
     if(n==0){
        break;
    }
    
     promedio += n;
     cantidadDatos++;

}while ( n != 0);
promedio /= cantidadDatos;
console.log(promedio);
 
