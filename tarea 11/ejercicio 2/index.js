/*
algoritmoproducto con iva 
ingresar precio del producto
leer precio del producto 
proceso multiplicar  el precio del producto por el iva y sumarlo al precio del producto 
imprimir precio producto con iva
fin
*/

function productoIva (precio,iva){
    letprodIva=(producto + iva) + producto;
    return productoIva;
}
let precio = parseInt(prompt("ingrese el precio del producto"));
let iva = parseFloat (prompt("ingrese el  iva"));
let precioIva= productoIva(precio,iva);
console.log("el precio del producto con iva es:", precioIva);
