/* Julian Medina Div I
IF 8

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */ 

function mostrar()
{
	let edad;
	let estadoc;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoc = document.getElementById("estadoCivil").value;

	if(edad>17 && estadoc=="Soltero")
	{
		alert("Es soltero y no es menor.");
	}
	else //debajo de esta linea no deberia ser codeado, debido a que es redundante y sin una cuestion final.
	{
		if (edad<18 && estadoc!="Soltero") 
		{
			alert("NO hacer nada"); //lo deje up para ver si funca harry
		}
	}


	//tomo la edad  
	//alert("ok");

}//FIN DE LA FUNCIÓN txtIdEdad Soltero Casado Divorciado