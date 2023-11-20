document.write("<h1>Hello World!</h1>")

window.onload = function() {
    document.getElementById("mensaje-js").innerHTML = "Hola Mundo!";
    document.getElementById("hora").innerHTML = Date();
}

let mivarialbe = 10;

let suma = mivariable + 20;

//window.alert("Thist is an alert! " + mivariable);

//window.open("https://www.google.com", "_blank", "width=400, height=400");

function multiplica(mivariable, suma){
    let resultado= mivariable * suma;
    //window.alert("El resultado es: " + resultado);
    document.write(mivariable + " * " + suma + " = " + resultado);
    return resultado;
}

function resEqSecGrade(a, b, c){
    let x1, x2;
    if(a == 0){
        window.alert("El coeficiente cuadratico no puede ser cero");
        return;
    }
    if(Math.pow(b, 2) - 4 * a * c < 0){
        window.alert("No existen soluciones reales");
        return;
    }
    if(Math.pow(b, 2) - 4 * a * c == 0){
        window.alert("Existen soluciones reales e iguales");
    }
    x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  //  window.alert(a+"x^2 + "+b+"x + "+c+"\nx1 = " + x1 + " x2 = " + x2);
}
//multiplica(mivariable, suma);

//Funcion para validar el formulario y obtener los datos
function trustForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    //mostrar rexultados en el html
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Nombre: ${name}</p><br><p>Email: ${email}</p><br><p>Mensaje: ${message}</p>`;
}

function sum(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result-calculator");
    result.innerHTML = `<p>Resultado: ${parseInt(num1) + parseInt(num2)}</p>`;
}

//funcion para mostrar la fecha actual
function showDate(){
    let date = new Date();
    alert('Fecha completa: '+date);
    alert('Fecha corta: ' + date.toLocaleDateString());
    alert('Hora: ' + date.toLocaleTimeString());
}

//Ejemplos clase string
function stringExamples(){
    let str="Ejecutando ejemplos de la clase String";

    alert('Longitud del string: ' + str.length);

    //convertir a minusculas
    alert('Convertir a minusculas: ' + str.toLowerCase());
    alert('Convertir a mayusculas: ' + str.toUpperCase());

    //obtener una subcadena
    let subcadena = str.substring(8, 21);
    alert('Subcadena: ' + subcadena);

    //obtener el indice de una subcadena
    let index = str.indexOf("ejemplos");
    alert('Indice de la subcadena: ' + index);
}