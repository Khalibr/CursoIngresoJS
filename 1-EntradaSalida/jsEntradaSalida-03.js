/* Julian Medina DIV I
ES 03

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	/* "var nombre; " <- var = let (misma palabra designada)
 	 nombre=txtIdNombre.value; <- funciona pero no es la forma de hacerlo */
	
	nombre = document.getElementById("txtIdNombre").value;

	alert(nombre);

	document.getElementById("txtIdNombre").value = ""; //-> esta linea sirve para una vez aceptado el alert deje la caja por default

}


