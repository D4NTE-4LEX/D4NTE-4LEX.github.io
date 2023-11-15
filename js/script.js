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
    window.alert(a+"x^2 + "+b+"x + "+c+"\nx1 = " + x1 + " x2 = " + x2);
}
//multiplica(mivariable, suma);