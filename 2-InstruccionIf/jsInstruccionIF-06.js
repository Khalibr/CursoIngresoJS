/* 

Al ingresar una edad debemos informar 
si la personaes mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad<13)
	{
		alert("Es un niño");
	}
	else
	{
		if(edad<18)
		{
			alert("Es adolecente");
		}
		else
		{
			alert("Es mayor de edad");
		}
	}

//tomo la edad  
	alert("ok");

}//FIN DE LA FUNCIÓN txtIdEdad