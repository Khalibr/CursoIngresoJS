/* Julian Medina Div I
TP 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = precio1+precio2+precio3;

    console.log(resultado);

    alert(`La suma es ${resultado}`);

	
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = (precio1 + precio2 + precio3) / 3;

    console.log(resultado);

    alert(`El promedio es ${resultado}`);
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;
    iva = suma * 0.21;
    resultado = suma + iva;
    console.log(resultado);

    alert(`El promedio es ${resultado}`);
}