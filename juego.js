
let preguntas = [];

fetch("preguntas.json")
.then((response) => response.json())
  .then((data) => {
    preguntas = data;
    jugar();
    });

   const pregunta = document.querySelector(".pregunta");
   const opciones = Array.from(document.querySelectorAll(".opcionContenedor"));
   
   let preguntaActual = {};
  
   let incorrectas = 0;
   let preguntaContador = 0;
   let preguntasDisponibles = [];

   let puntajeDisplay = document.querySelector(".puntosActual");
   let sumaPuntos = document.querySelector(".sumaPuntaje");
   let puntos = 0;
   const bonus = 10;
   puntajeDisplay.innerHTML = `Puntos : ${puntos}`;
  
   let Puntos = ()=> {
  
     puntos = puntos + bonus;
     puntajeDisplay.innerHTML = `Puntos : ${puntos}`;
      
     }


mostrarPreguntas = () => {
// verifica que no haya mas preguntas o 4 respuestas incorrectas
  if (preguntasDisponibles.length === 0 || incorrectas == 4) {
    localStorage.setItem('puntajeReciente', puntos);
    return window.location.href = "finJuego.html";
  }
  preguntaContador++;
  const indexPregunta = Math.floor(Math.random() * preguntasDisponibles.length);
  preguntaActual = preguntasDisponibles[indexPregunta];
  pregunta.innerText = preguntaActual.pregunta;

  opciones.forEach(opcion => {
    const num = opcion.dataset["number"];
    opcion.innerText = preguntaActual["opcion" + num];
  });

  preguntasDisponibles.splice(indexPregunta, 1);

};

opciones.forEach(opcion => {
  opcion.addEventListener("click", e => {

    let opcionSeleccionada = e.target;
    let respuestaSeleccionada = opcionSeleccionada.dataset["number"];
     
    let colorClase;
    if(respuestaSeleccionada == preguntaActual.respuesta){
        colorClase = 'Correcta';
        Puntos();
    }else{
        colorClase = 'Incorrecta';
        incorrectas++;
    }
      
    let puntoSuma = colorClase;
    opcionSeleccionada.parentElement.classList.toggle(colorClase);
    sumaPuntos.innerHTML = `Respuesta ${puntoSuma}`;
    
    setTimeout(() => {
      opcionSeleccionada.parentElement.classList.toggle(colorClase);
      sumaPuntos.innerHTML = "";
      mostrarPreguntas();
    }, 1500);
  });
});

 
jugar = () => {
  preguntasDisponibles = [...preguntas];
  mostrarPreguntas();
}

