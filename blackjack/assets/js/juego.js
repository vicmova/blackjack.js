let baraja = [];
const tiposCarta = ['C', 'D', 'H', 'S'];
const otrasCartas = ['A','J','Q','K'];

let puntosJugador = 0 ;
let puntosOrdenador = 0;

//------------------------------------------------ Referencias HTMl

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasOrdenador = document.querySelector('#ordenador-cartas');
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

//---------------------------- Esta función permite coger una carta

const pedirCarta = () => {

    if( baraja.length === 0 ){
        throw 'No quedan cartas en la baraja.'
    }

    const carta = baraja.pop();

    return carta;
}


//--------------------------------------------- pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length -1);

    return (isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor *1;

}

//--------------------------------------------- Turno ordenador

const turnoOrdenador = ( puntosMinimos ) => {

    do {

        const carta = pedirCarta();
    
        puntosOrdenador = puntosOrdenador + valorCarta( carta );
        puntosHTML[1].innerText = puntosOrdenador;
    
        //crea carta en memoria <img>
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasOrdenador.append(imgCarta);

        if(puntosMinimos > 21 ){
            break;
        }

    } while( (puntosOrdenador < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(()=>{

        if( puntosOrdenador === puntosMinimos ){

            window.alert('-- PARTIDA EMPATADA --');
    
        } else if ( puntosJugador > 21 ){
            window.alert('El ordenador te ha ganado!! ;(');
        } else if ( puntosOrdenador > 21 ){
            window.alert('Has ganado!! ;) !!');
        }

    }, 10);

}

//--------------------------------------------------- Eventos

/*
Escuchar cuando user hace click en button. 
puede ser focus, dbclick,
callback = función que se manda como argumento de otra función 
*/
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );

    puntosHTML[0].innerText = puntosJugador;

    console.log( puntosJugador );

    //crea carta en memoria <img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);

    if( puntosJugador > 21 ){
    
        //window.alert('Has perdido! FIN DE PARTIDA!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador( puntosJugador );
    
    } else if (puntosJugador === 21 ){
        
        //window.alert('¡¡¡HAS GANADO!!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador( puntosJugador );
    
    }

});


btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoOrdenador( puntosJugador );

});

btnNuevoJuego.addEventListener('click', () => {

    console.clear();

    baraja=[];
    
    baraja = crearBaraja();

    puntosJugador   = 0;
    puntosOrdenador = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasOrdenador.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});