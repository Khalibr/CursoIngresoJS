/* 

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

function mostrar()
{
	let edad;
	let estadoc;

	estadoc = document.getElementById("estadoCivil").value;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 18 && estadoc!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	//tomo la edad  
	alert("ok");
	


}//FIN DE LA FUNCIÓN txtIdEdad