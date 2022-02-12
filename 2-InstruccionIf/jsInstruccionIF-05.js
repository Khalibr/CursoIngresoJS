/*Julian Medina Div I
IF 05

Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)
	{
		alert("Usted NO es adolecente");
	}
	//tomo la edad  
	alert("ok");

}//FIN DE LA FUNCIÓN