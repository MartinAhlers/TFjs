const puntajes = JSON.parse(localStorage.getItem('puntajes'));

const lista = document.querySelector('.lista');
let ls = document.createElement('ul');
lista.appendChild(ls);




puntajes.forEach(puntos => {
    let row = document.createElement('li');
    row.innerHTML = `${puntos.nombre}  - ${puntos.puntos} puntos`
    ls.appendChild(row);
});

