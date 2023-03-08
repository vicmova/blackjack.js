console.log('Manipulación de objetos que no existen en HTML');

//Ejemplo agregar botón

/*
<div class="row mt-2">
<div class="col text-center">
    <button class="btn btn-danger">Nuevo juego</button>
    <button class="btn btn-primary">Pide carta</button>
    <button class="btn btn-primary">Para</button>
</div>
</div>
*/

<div class="row mt-2">
<div id="divBotones" class="col text-center">
    <button class="btn btn-danger">Nuevo juego</button>
    <button class="btn btn-primary">Pide carta</button>
    <button class="btn btn-primary">Para</button>
</div>
</div>

//desde consola del navegador

const divBotones = document.querySelector('#divBotones');

document.createElement('button');

const botonNuevo = document.createElement('button');

divBotones.append( botonNuevo );

//TEXTO BUTTON
botonNuevo.innerText = 'DEMILICH'

//ESTILOS BUTTON
botonNuevo.classList.add('btn')
botonNuevo.classList.add('btn-success')

//crear input

//cuando lo crea está en memoria, todavía no está en el HTML
const input = document.createElement('input')

//insertar input en el body
document.body.append( input )

input.classList.add('form-control')

input.placeholder = 'MORBID ANGEL'