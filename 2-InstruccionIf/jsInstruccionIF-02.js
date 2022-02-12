/* Julian medina div I
IF 02

Al ingresar una edad debemos 
informar solo si la persona es mayor de edad*/


function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>=18)
	{
		alert("Eres  mayor de 18");
	}

	//tomo la edad  
	alert("ok");
	

}//FIN DE LA FUNCIÓN txtIdEdad