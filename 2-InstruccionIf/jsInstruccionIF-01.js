/* Julian Medina Div I
IF 01


Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita". */


function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//condicion dentro del if - sentencia dentro de {}.
	if(edad==15) //<- no finaliza con ";" porque deja la sentencia fuera del if
	{
		alert("Niña bonita");
	}


	//tomo la edad  
	alert("Estoy fuera del if, pero me ejecuto igual");

}
//FIN DE LA FUNCIÓN
// txtIdEdad

/* 
Operadores aritmeticos: +, -, *, /, %
Operadores relacionales: >=, <=, ==, !=, <, >
Operadores logicos: &&, ||, !

Condicion -> valores de verdad (Verdadero o Falso)
valor de verdad:
falso -> falso o 0
verdadero -> true o cualquier valor distinto de 0

*/