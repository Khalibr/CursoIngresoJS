/*Julian Medina Div I
Tp 2 entregar

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    //distancias
    let largo;
    let ancho;

    //boton
    let rectangulo;

    let metros;
    let mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    metros = parseInt(metros);

    metros = (largo + ancho) * 2;
    rectangulo = metros * 3;

    mensaje = `Si el terreno rectangular es de ${metros} metros cuadrados deberá`;
    mensaje += ` utilizar ${rectangulo} metros de alambre.`;
   
    //alert(`Si el terreno rectangular es de ${metros} metros cuadrados deberá utilizar ${rectangulo} metros de alambre`);
    
    alert(mensaje);
}

function Circulo() {
    //distancia
    let perimetro;
    let alambre
    const PI = 3.14;

    //boton
    let radio;

    let mensaje;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = 2 * PI * radio;
    perimetro = perimetro.toFixed(2);
    alambre = perimetro * 3;
    alambre = alambre.toFixed(2);

    mensaje = `Si el perimetro del terreno es de ${perimetro} metros, deberá utilizar `;
    mensaje += `${alambre}  metros de alambre.`;

    //alert(`Si el perimetro del terreno es de ${perimetro} metros, debera utilizar ${alambre} metros de alambre`);

    alert(mensaje);
}

function Materiales() {
    //distancia
    let largo;
    let ancho;

    //mats 1m x 1m = 2 de cemento y 3 de cal
    let terreno;
    let totalbolsascem;
    let totalbolsascal;

    let mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    terreno = parseInt(terreno);
    totalbolsascem = parseInt(totalbolsascem);
    totalbolsascal = parseInt(totalbolsascal);

    terreno = largo * ancho;
    totalbolsascem = (terreno * 2);
    totalbolsascal = (terreno * 3);

    mensaje = `Si el terreno mide ${terreno} m2 deberá usar ${totalbolsascem}`;
    mensaje += ` bolsas de cemento y ${totalbolsascal} bolsas de cal`;

    //alert(`Si el terreno mide ${terreno} metros cuadrado debera usar ${totalbolsascem} bolsas de cemento y ${totalbolsascal} bolsas de cal`);

    alert(mensaje);
}