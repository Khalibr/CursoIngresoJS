/*  Julian Medina DIV I
ES 04

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
		
	// reservo espacio en memoria para guardar el nombre del user
	let nombre;
	
	// guardo en la var nombre el txt que escribio el user dentro del promp
	nombre = prompt("Ingrese su nombre");

	//copio el txt que user que uso dentro de promp para mostrarlo en el html
	document.getElementById("txtIdNombre").value = nombre;


}	
	

