/**
 * Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
 */


function mostrar()
{
	let randomnota = Math.floor(Math.random() * 11);
	
	if(randomnota>8)
	{
		alert(`¡Un ${randomnota}! Excelente nota`);
	}
	else
	{
		if (randomnota < 5) 
		{
			alert(`¡Un ${randomnota}! seguí participando`);
		}
		else
		{
			if (randomnota < 9) 
			{
				alert(`¡Un ${randomnota}! Aprobado de pedo`);
			}
		}
	}
	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN