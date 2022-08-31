let centrado = document.getElementById("centrado");
let buttonA = document.getElementById("butA");
let buttonB = document.getElementById("butB");
let buttonC = document.getElementById("butC");
let first = document.getElementById("fg");
let second = document.getElementById("seven");
let third = document.getElementById("gone");
let cantidadEntradas;
let peliculaSeleccionada;
let precio;
let dinero;
let seleccion = false;
let pelicula = [
    {nombre: "Fight Club", precio: 300},
    {nombre: "Seven", precio: 250},
    {nombre: "Gone Girl", precio: 200},
];

buttonA.addEventListener(`click`, function(){
    second.style.display = "none";
    third.style.display = "none";
    centrado.style.justifyContent = "center";
    start();
});
buttonB.addEventListener(`click`, function(){
    first.style.display = "none";
    third.style.display = "none";
    centrado.style.justifyContent = "center";
    start();
});
buttonC.addEventListener(`click`, function(){
    first.style.display = "none";
    second.style.display = "none";
    centrado.style.justifyContent = "center";
    start();
});


function cartelera() {
    alert("El cine esta haciendo una función especial del director David Fincher, las películas en cartelera son: " + pelicula[0].nombre + " - " + pelicula[1].nombre + " - " + pelicula[2].nombre);
    peliculaSeleccionada = prompt("Para elegír que pelicula ver escribir A para " + pelicula[0].nombre + ": $" + pelicula[0].precio + " , B para " + pelicula[1].nombre + ": $" + pelicula[1].precio + " y C para " + pelicula[2].nombre + ": $" + pelicula[2].precio);
    if (peliculaSeleccionada == "a" || peliculaSeleccionada == "A"){
        pelicula = pelicula[0];
        alert("Elegiste la película "+ pelicula.nombre);
        seleccion = true;
        
    }
    else if (peliculaSeleccionada == "b" || peliculaSeleccionada == "B"){
        pelicula = pelicula[1];
        alert("Elegiste la película "+ pelicula.nombre);
        seleccion = true;
        
    }
    else if (peliculaSeleccionada == "c" || peliculaSeleccionada == "C"){
        pelicula = pelicula[2];
        alert("Elegiste la película "+ pelicula.nombre);
        seleccion = true;
        
    }
    else{
        alert("El dato que ingresaste es incorrecto");
    }
}
function pago() {
    cantidadEntradas = prompt("Cuantas entradas necesitas");
    precio = cantidadEntradas*pelicula.precio;
    dinero = prompt("Con que cantidad de dinero vas a abonar");
    if (dinero == precio) {
        alert("Disfrute la película " + pelicula.nombre);
        seleccion = false;
    }
    else if (dinero > precio){
        alert("Su vuelto es: $" + (dinero - precio) + ", disfrute la película " + pelicula.nombre);
        seleccion = false;
    }
    else{
        alert("No te alcanza");
    }
}

function sugerencia() {
    let recomendacion = prompt("Gracias, si tiene alguna sugerencia de una película de cualquiero director para agregar en cartelera escribala a continuación");
    let cartel = ["Fight Club","Seven","Gone Girl"];
    cartel.push(recomendacion);
    let listaDePeliculas = cartel.sort();
    listaDePeliculas = cartel.join(" - ");
    alert("Ahora la cartelera es: " + listaDePeliculas);
}





function start(){
    cartelera()
while(seleccion == true){
    pago()
}
sugerencia()
}

