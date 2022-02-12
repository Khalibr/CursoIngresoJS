/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentaje;
	let resultado;
	let importeConAumento;
	
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	porcentaje = sueldo * 0.10;
	importeConAumento = sueldo + porcentaje;
	
	console.log(importeConAumento);

	resultado = document.getElementById("txtIdResultado").value;
	document.getElementById("txtIdResultado").value = importeConAumento;

	console.log(resultado);
}

//txtIdResultado //txtIdSueldo