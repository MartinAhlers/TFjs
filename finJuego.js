const puntaje = JSON.parse(localStorage.getItem('puntajeReciente'));
const mostrarPuntos = document.querySelector('.puntajeFinal');
const nombre = document.querySelector('#nombre');
const guardarBtn = document.querySelector('#guardarPtsBtn');
const listaPuntos = document.querySelector('#puntosBtn');
const warning = document.querySelector('.warning');


mostrarPuntos.innerHTML = ` <p> ${puntaje} puntos </p>`;

const puntajes = JSON.parse(localStorage.getItem('puntajes')) || [];


listaPuntos.addEventListener('click', () =>{
    window.location.href = "puntajes.html";
});


guardarBtn.addEventListener('click', () =>{
if(nombre.value != ""){
const puntos = { puntos:puntaje, nombre: nombre.value};
puntajes.push(puntos);

localStorage.setItem('puntajes', JSON.stringify(puntajes));
window.location.href = "puntajes.html";
}else{
   warning.innerHTML = " Ingrese un nombre";
}
});

