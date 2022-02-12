/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let porcentaje;
	let importeConDescuento;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = importe * 0.25;
	importeConDescuento = importe - porcentaje;

	//resultado = document.getElementById("txtIdResultado").value;
	document.getElementById("txtIdResultado").value = importeConDescuento;

}

// txtIdImporte txtIdResultado