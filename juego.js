let baraja = [];
const tiposCarta = ['C', 'D', 'H', 'S'];
const otrasCartas = ['A','J','Q','K'];

let puntosJugador = 0 ;
let puntosOrdenador = 0;

//Referencias HTMl

const btnPedir = document.querySelector('#btnPedir');
//console.log( btnPedir );

const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');

//---------------------------------------------- Crea baraja
const crearBaraja = () => {

    for( let i = 2; i <= 10; i++ ){
        //ciclo for of
        for( let tipo of tiposCarta ){

             //baraja.push(i + 'C');
             baraja.push( i + tipo );
        }
    }

    for( let tipo of tiposCarta ) {
          //ciclo for of
        for( otra of otrasCartas) {
            
            baraja.push( otra + tipo );
        }
    }

    //console.log(baraja);
    baraja = _.shuffle( baraja );
    console.log( baraja );
    return baraja;

}

crearBaraja();

//Esta función permite coger una carta

const pedirCarta = () => {

    if( baraja.length === 0 ){
        throw 'No quedan cartas en la baraja.'
    }

    //console.log( 'cantidad cartas antes del .pop: ', baraja.length );

    const carta = baraja.pop();

    //console.log( 'cantidad cartas ahora: ', baraja.length );
    //console.log( 'carta seleccionada: ', carta );

    return carta;
}

/*
for(let i = 0; i <= 100; i++){
    pedirCarta();
}
*/

//--------------------------------------------pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length -1);

    return (isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor *1;

}

const valor = valorCarta( pedirCarta() );

//console.log( {valor} );

//--------------------------------------------- Eventos

/*
Escuchar cuando user hace click en button. 
*/

//puede ser focus, dbclick,
//callback = función que se manda como argumento de otra función 
btnPedir.addEventListener('click', () => {
    //console.log('click');
    const carta = pedirCarta();
    //console.log(carta);

    puntosJugador = puntosJugador + valorCarta( carta );

    puntosHTML[0].innerText = puntosJugador;

    console.log( puntosJugador );

    //crea carta en memoria <img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    if( puntosJugador > 21 ){
        console.warn('Has perdido! FIN DE PARTIDA!');
        btnPedir.disabled = true;
    } else if (puntosJugador === 21 ){
        console.warn('¡¡¡HAS GANADO!!!');
        btnPedir.disabled = true;
    }

});


