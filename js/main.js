let intentos = 3 ;
let saldoActual;
let opcion;
let usuario = prompt("Nombre de usuario");
let contraseña = prompt("Ingresa una clave numérica");

//Loggin
class Cliente {
    constructor (usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = Number(contraseña);
    }
}
const persona = new Cliente (usuario, contraseña);

//Array
const baseDeDatos = [] ;
baseDeDatos.push (persona);

//Colocamos un forEach para recorrer el Array y mostrar los elementos por consola
baseDeDatos.forEach(element =>{
    console.log(element);
});

//Ingresar dinero a la cuenta
function ingresarDinero () {
    let ingreso = Number(prompt("Ingrese la cantidad que desee despositar: "));
    saldoActual = (saldoActual + ingreso);
    alert("Ingresó $" + ingreso);
}

//Retirar dinero de la cuenta
function retiroDinero () {
    let retiro = Number(prompt("Ingrese el monto que desee extraer"));
    if (retiro <= saldoActual) {
        saldoActual = (saldoActual - retiro);
        alert ("Extrajo $" + retiro);
    }else {
        alert ("Su saldo es insuficiente");
    }
}

//Consultar datos
function consultarDatos () {
    alert ("Su nombre de usuario es: " + persona.usuario);
    alert ("Su contraseña es: " + persona.contraseña);
}

//Consultar saldo
function consultarSaldo () {
    alert ("Su saldo actual es: $" + saldoActual);
}

//Generamos un For tradicional
for (let i=0; i<3; i++) {
    let user = prompt("Ingrese su usuario");
    let pass = Number(prompt("Ingrese su contraseña"));

    //Si coloca otro dato que no sean los pedidos, les saldrá el mensaje:
    if (!user || !pass) {
        alert("Ingresa los datos solicitados");
    }else {
        //Si los datos ingresados coinciden con los datos pedidos, le damos la bienvenida
        if (user == persona.usuario && pass == persona.contraseña) {
            alert ("Bienvenido " + persona.usuario);

            //Le pedimos al usuario que coloque el saldo que posee
            saldoActual = Number(prompt("Ingrese el saldo actual"));
            alert("Bienvenido al menú principal");

            //Creamos el menú para hacer las operaciones
            do {
                opcion = Number(prompt("¿Qué operación desea realizar? \n1. Depositar dinero \n2. Extraer dinero \n3. Consultar saldo \n4. Consultar ["));

                switch (opcion) {
                    case 1:
                        ingresarDinero ();
                        break;
                    case 2:
                        retiroDinero ();
                        break;
                    case 3:
                        consultarSaldo ();
                        break;
                    case 4:
                        consultarDatos ();
                        break;
                    case 5:
                        alert("Muchas gracias");
                        break;
                    default:
                        alert("Ingrese una opción correcta");
                }
            }while (opcion !=5);
            break;
        }else{
            alert("Usuario y/o contraseña incorrecto. Te quedan " + intentos + " intentos");
            intentos--;
        }
    }
}
if (intentos <= 0){
    alert("Usuario bloqueado");
}