/* Julian Medina Div I
IF 03 

Al ingresar una edad debemos informar si la persona
es mayor de edad, sino informar que es un menor de edad.*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);


	//ejemplo de condicionales dobles
	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	else //si no se culpe el true de if. else(de otro modo) se ejecuta esta linea
	{
		alert("Es menor de edad");
	}

	//tomo la edad  
	alert("ok");

}

//FIN DE LA FUNCIÓN txtIdEdad