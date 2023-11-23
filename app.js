/*EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.*/
const evaluarEdad = () => {
    let input = document.getElementById('edad');
    let edad = parseInt(input.value);
    console.log(edad);
    let resultado = document.querySelector('#resultadoEvaluacion');
    if (edad !== '' && edad > 0) {
        edad >= 18 ? resultado.innerHTML = 'Es mayor de edad' : resultado.innerHTML = 'Aun no es mayor de edad';
    } else {
        resultado.innerHTML = 'Debe ingresar la edad';
    }
    input.value = '';
}
document.querySelector('#evaluarEdad').addEventListener('click', evaluarEdad);
/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/
const calcularNotaFinal = (examen, tareas, asistencia, investigacion) => {
    return ((examen * .2) + (tareas * .4) + (asistencia * .1) + (investigacion * .3));
}
const obtenerResultados = () => {
    let nombre = document.getElementById('nombre').value;
    let carnet = document.getElementById('carnet').value;
    let examen = parseFloat(document.getElementById('examen').value);
    let tareas = parseFloat(document.getElementById('tareas').value);
    let asistencia = parseFloat(document.getElementById('asistencia').value);
    let investigacion = parseFloat(document.getElementById('investigacion').value);
    //funcion toFixed(2) para mostrar solo dos decimales
    let notaFinal = parseFloat(calcularNotaFinal(examen, tareas, asistencia, investigacion)).toFixed(2);
    let resultado = document.querySelector('#resultadoCalificaciones');
    resultado.innerHTML = `El alumno ${nombre}, con codigo ${carnet}, obtuvo la nota de ${notaFinal}`;
}
document.querySelector('#obtenerCalificaciones').addEventListener('click', obtenerResultados);
/*EJERCICIO 3:
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/
let categoria = [{ nombre: 'A', valor: 15 }, { nombre: 'B', valor: 30 }, { nombre: 'C', valor: 10 }, { nombre: 'D', valor: 20 }];
const selectCategoria = () => {
    let select = document.getElementById('categoria');
    categoria.map((categoria) => {
        select.innerHTML += `<option value='${categoria.valor}'> ${categoria.nombre}</option>`;
    });
}
const calcularAumento = () => {
    let nombreEmpleado = document.getElementById('nombreEmpleado').value;
    let salario = parseFloat(document.getElementById('salario').value);
    let cbxCategoria = document.getElementById('categoria');
    let categoria = parseFloat(cbxCategoria.value);
    let nombreCategoria = cbxCategoria.options[cbxCategoria.selectedIndex].text;;
    let resultado = document.querySelector('#resultadoAumento');
    let aumento = parseFloat((categoria / 100) * salario).toFixed(2);
    resultado.innerHTML = `El colaborador ${nombreEmpleado}, con un salario actual \$${salario}, en la categoria ${nombreCategoria}, obtendra un aumento de \$${aumento}`
}
document.querySelector('#calcularAumento').addEventListener('click', calcularAumento);
/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */
const numeroMayor = () => {
    let numeroA = parseInt(document.getElementById('numeroA').value);
    let numeroB = parseInt(document.getElementById('numeroB').value);
    let resultado = document.querySelector('#resultadoNumeroMayor');
    numeroA > numeroB ? resultado.innerHTML = `El numero mayor es ${numeroA}` : resultado.innerHTML = `El numero mayor es ${numeroB}`;
}
document.querySelector('#calcularNumeroMayor').addEventListener('click', numeroMayor);
let autos = [{ nombre: 'FORD FIESTA', descuento: 5, url: 'https://res.cloudinary.com/dyhftwfrw/image/upload/v1700657548/actividad2/cqijy7e2qzeul0ftz5bk.png' }, { nombre: 'FORD FOCUS', descuento: 10, url: 'https://res.cloudinary.com/dyhftwfrw/image/upload/v1700657550/actividad2/wnmjnvoytrsul2t8gce0.png' }, { nombre: 'FORD ESCAPE', descuento: 20, url: 'https://res.cloudinary.com/dyhftwfrw/image/upload/v1700657548/actividad2/sfvd0qfpl3iprcnp6k78.png' }]
let selectAutos = () => {
    let select = document.querySelector('#autos');
    autos.map((auto) => {
        select.innerHTML += `<option value='${auto.descuento}'> ${auto.nombre}</optiom>`;
    })
}
const establecerImg = () => {
    let select = document.getElementById('autos').value;
    let imgAuto = document.querySelector('#imgAuto');
    autos.map(auto => {
        auto.descuento == select ? imgAuto.src = `${auto.url}` : '';
    });
}
document.querySelector('#autos').addEventListener('change', establecerImg);
let calcularDescuento = () => {
    let cbxSelect = document.getElementById('autos');
    let descuento = cbxSelect.value;
    let nombreAuto = cbxSelect.options[cbxSelect.selectedIndex].text;;
    let resultado = document.querySelector('#restadoDescuento');
    resultado.innerHTML = `El porcentaje de descuento para el ${nombreAuto} es del ${descuento}%`
}
document.querySelector('#obtenerDescuento').addEventListener('click', calcularDescuento);
/*EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.*/
let origen = ['Ciudad de Palma', 'San Salvador', 'Cojutepeque'];
const selectOrigen = () => {
    let select = document.querySelector('#origen');
    origen.map((origen) => {
        select.innerHTML += `<option value='${origen}'> ${origen}</option>`;
    })
}
let destinos = [{ nombre: 'Costa del Sol', descuento: 5 }, { nombre: 'Panchimalco', descuento: 10 }, { nombre: 'Puerto el Triunfo', descuento: 15 }];
const selectDestino = () => {
    let select = document.querySelector("#destino");
    destinos.map((destino) => {
        select.innerHTML += `<option value='${destino.descuento}'> ${destino.nombre}</option>`;
    });
}
const evaluarDescuento = () => {
    let selectOrigen = document.getElementById("origen").value;
    let resultado = document.querySelector("#resultadoDescuento");
    let selectDestino = document.getElementById('destino');
    let nombreDestino = selectDestino.options[selectDestino.selectedIndex].text;
    let descuento = parseInt(selectDestino.value);
    if (selectOrigen == "Ciudad de Palma") {
        destinos.map((destino) => {
            if (destino.descuento === descuento) {
                resultado.innerHTML = `Este destino ${nombreDestino}, tiene un descuento de ${descuento}%`;
            }
        });
    } else {
        resultado.innerHTML = `Lo sentimos, a partir de ${selectOrigen} no posee ningun tipo de descuento`;
    }
}
document.querySelector('#evaluarDescuento').addEventListener('click', evaluarDescuento);
/*EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.*/
let numeros = [];
const agregar = () => {
    let input = document.getElementById("numero");
    let numero = input.value;
    numeros.push(numero);
    mostrar();
    input.value = "";
}
const mostrar = () => {
    let lista = document.querySelector("#listaDatos");
    lista.innerHTML = "";
    if (numeros.length >= 0) {
        numeros.map((numero) => {
            lista.innerHTML += `<li>${numero} </li>`
        })
    }
}
const calculosNumericos = () => {
    let totalNegativos = 0;
    let totalPositivos = 0;
    let totalMultiplo = 0;
    let totalPares = 0;
    if (numeros.length >= 10) {
        numeros.map((numero) => {
            if (numero >= 0) {
                totalPositivos++;
            } else {
                totalNegativos++;
            }
            if (numero % 15 == 0) {
                totalMultiplo++;
            }
            if (numero % 2 == 0) {
                totalPares = parseInt(totalPares) + parseInt(numero);
            }
        });
        let resultado = document.querySelector("#resultadoCalculos");
        resultado.innerHTML = `El total de numeros negativos es: ${totalNegativos}, el total de numeros positivos es: ${totalPositivos}
                        El total de numeros multiplos de 15 es: ${totalMultiplo}, y el total de la suma de numeros pares es: ${totalPares}`;
    }
}
document.querySelector('#agregar').addEventListener('click', agregar);
document.querySelector('#calculosNumericos').addEventListener('click', calculosNumericos);
/*EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.*/
const calcularTabla = () => {
    let input = parseInt(document.getElementById("numeroTabla").value);
    let tabla = document.querySelector("#resultadoTabla");
    if(input !== '' && input > 0){
        console.log(input);
        for(let i = 1; i <= 10; i++){
            tabla.innerHTML += `<li> ${i} x ${input} = ${i*input}</li>`; 
        }
    }
}
document.querySelector("#calcularTabla").addEventListener('click', calcularTabla);
/*EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”*/

const convertirTemperatura = () => {
    let input = parseFloat(document.getElementById("temperatura").value);
    let resultado = document.querySelector("#resultadoTemperatura");
    let temperatura = parseFloat((input * 1.8) + 32).toFixed(2);
    if(temperatura >= 14 && temperatura <= 32){
        resultado.innerHTML = `La temperatura es de ${temperatura}°F, esta Temperatura es baja`;
    }else if(temperatura > 32 && temperatura <= 68){
        resultado.innerHTML = `La temperatura es de ${temperatura}°F, esta Temperatura es adecuada`;
    }else if(temperatura > 68 && temperatura <= 96){
        resultado.innerHTML = `La temperatura es de ${temperatura}°F, esta Temperatura es alta`;
    }else{
        resultado.innerHTML = `La temperatura es de ${temperatura}°F, esta Temperatura es desconocida`;
    }
}
document.querySelector("#convertirTemperatura").addEventListener('click', convertirTemperatura);
/*EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.*/
let promedios = [];
const agregarAlumno = () => {
    let input = document.getElementById("edadAlumno");
    let edad = parseInt(input.value);
    let turno = document.getElementById("turno").value;
    promedios.push({edad: edad, turno: turno});
    input.valor = "";
    console.log(promedios);
}
const calcularPromedios = () => {
    let promedioMatutino = 0;
    let promedioVespertino = 0;
    let promedioNocturno = 0;
    let resultado = document.querySelector("#resultadosPromedios");
   
    promedios.map((promedio) => {
        if(promedio.turno == 1){
            let cantidad = 0;
            let suma = 0;
            suma += parseInt(promedio.edad);
            cantidad++;
            promedioMatutino = parseInt(suma / cantidad);
        }
        if(promedio.turno == 2){
            let cantidad = 0;
            let suma = 0;
            suma += parseInt(promedio.edad);
            cantidad++;
            promedioVespertino = parseInt(suma / cantidad);
        }
        if(promedio.turno == 3){
            let cantidad = 0;
            let suma = 0;
            suma += parseInt(promedio.edad);
            cantidad++;
            promedioNocturno = parseInt(suma / cantidad);
        }
    });
    let promedioTotal = parseInt((promedioMatutino + promedioVespertino + promedioNocturno) / 3);
    resultado.innerHTML += `<li> Promedio Matutino: ${promedioMatutino}</li>`;
    resultado.innerHTML += `<li> Promedio Vespertino: ${promedioVespertino}</li>`;
    resultado.innerHTML += `<li> Promedio Matutino: ${promedioNocturno}</li>`;
    resultado.innerHTML += `<li> Promedio de la edad Mayor es: ${promedioTotal}</li>`;
}
document.querySelector("#agregarAlumno").addEventListener('click', agregarAlumno);
document.querySelector("#obtenerPromedios").addEventListener('click', calcularPromedios);
function loader() {
    selectCategoria();
    selectAutos();
    selectOrigen();
    selectDestino();
}