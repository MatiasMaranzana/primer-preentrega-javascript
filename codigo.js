
alert ("Bienvenido a nuestro portal de cotizaciones");

while(true){
    let nombre= prompt("Ingrese su nombre y apellido:" + "\n" + "ESC para salir.");
    if(nombre.toUpperCase()==="ESC")break;

alert ("Hola " + nombre.toUpperCase()  + " vamos a comenzar a planificar su seguro de retiro.");

let edad;
do {
    edad = parseInt (prompt("Ingrese su edad: "));
} while (isNaN(edad));

let edadRetiro;
do {
    edadRetiro = parseInt (prompt ("¿A que edad se quiere retirar?"));
} while (isNaN(edadRetiro));

let aporteMensual;
do {
aporteMensual = parseInt (prompt ("¿Cuanto dinero quiere aportar por mes (U$D)?"));
} while (isNaN(aporteMensual));

let aporteAnual = (aporteMensual * 12);

function seguroDeRetiro (aporteAnual, edad, edadRetiro) {
    let aniosParaJubilacion = edadRetiro - edad;
    let totalAportes = aporteAnual * aniosParaJubilacion;
    let montoRetiro = totalAportes;

    for (let x = 0; x < aniosParaJubilacion; x++) {
        montoRetiro = montoRetiro * 1.08; 
        montoRetiro += aporteAnual;
    }
    return montoRetiro
} 

let resultado = seguroDeRetiro (parseFloat(aporteAnual), parseInt(edad), parseInt(edadRetiro));
alert ("Felicitaciones " + nombre.toUpperCase() + "\n\n" + "Usted va a retirarse a sus " + edadRetiro + " años" + "\n\n" + "Con la increíble suma de U$D " + resultado.toFixed(2));
}
