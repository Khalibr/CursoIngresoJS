/* Julian Medina DIV I
ES 01

Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("Esto funciona de maravilla");
} */


/*Ejercicio 1 (Podes usar el ejercicio E/S 01 del curso de ingreso)
Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), el promedio
de los precios y el precio final total más iva(21%), pedir un porcentaje 
de descuento y aplicarlo al precio final , mostrar todos los datos calculados
e ingresados ​​por alerta. (solo una alerta en el código). Los datos se piden
 por prompt.
*/


function mostrar ()
{
	//producto
	let producto1;
	let producto2;
	let producto3;

	//precio
	let precio1;
	let precio2;
	let precio3;

	//math
	let descuento;
	let preciofinal;
	let bruto;
	let promedio;
	let iva;
	let descuentofinal;

	//mensaje
	let mensaje;


	producto1 = prompt("Ingrese el primer producto");
	precio1 = prompt("Ingrese el valor del producto");

	producto2 = prompt("Ingrese el segundo producto");
	precio2 = prompt("Ingrese el valor del producto");

	producto3 = prompt("Ingrese el tercer producto");
	precio3 = prompt("Ingrese el valor del producto");

	descuento = prompt("Cuanto descuento desea tener: %");
	descuento = parseInt(descuento);
	
	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3  = parseFloat(precio3);

	bruto = precio1 + precio2 + precio3;
	promedio = bruto / 3;
	iva = bruto * 1.21;
	
	descuentofinal = iva /100 * descuento;
	preciofinal = iva - descuentofinal;

	mensaje = `La siguiente lista de productos y precio elegidos por el cliente son: ${producto1} $${precio1} ||| ${producto2} $${precio2}`;
	mensaje += ` ||| ${producto3} $${precio3} ||| El precio bruto es de: $${bruto}, el promedio de estos tres productos es de: $${promedio.toFixed(2)}`;
	mensaje += `, precio con iva es de: $${iva.toFixed(2)}, precio final con el descuento del ${descuento}% es de: ${preciofinal.toFixed(2)}`;
	
	alert(mensaje);

}
