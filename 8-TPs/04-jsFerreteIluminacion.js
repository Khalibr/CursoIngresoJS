/*4. Julian Medina Div I
TP 4
	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //hardcode
    var descuento = 0;
    var precioUnitario = 35;
    var impuesto = 0;
    var impuestoagregado;

    //Obtencion de datos del user
    var cantidad = document.getElementById("txtIdCantidad").value;

    //Seteo un precio final sin descuento
    var precioFinal = cantidad * precioUnitario;

    //marcas
    var marca = document.getElementById("Marca").value;
    

    if(cantidad>5)
    {
        descuento= 50;
    }
    else
    {   //B
        if(cantidad == 5)
        {
            descuento = 30;
            if(marca =="ArgentinaLuz")
            {
                descuento = 40;
            }
        }
        else
        {   //C
            if(cantidad==4)
            {
                descuento=20;
                if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    descuento=25;
                }
            }
            else
            {   //D
                if(cantidad==3)
                {
                    descuento=5;
                    if (marca =="ArgentinaLuz")
                    {
                        descuento=15;
                    }
                    if (marca =="FelipeLamparas")
                    {
                        descuento=10;
                    }
                }
            }
        }
        
        
    }
    
    //Calculo el precio final con descuento o no
    precioFinal -= precioFinal * descuento / 100;
    
    //Seteamos el pprecio final ya sea con descuento o no
    document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
    
    if(precioFinal>120)
    {
        impuesto=10;
        impuestoagregado = precioFinal + precioFinal * impuesto /100;
        alert(`superaste los 120$. se aplicará un 10% a su compra final: ${impuestoagregado}$`);
    }
}

//txtIdCantidad ||| Marca ||| txtIdprecioDescuento