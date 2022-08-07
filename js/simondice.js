/*Simon Dice*/
let startSimon = false
let secuenciaMaquina = []
let secuenciaJugador = []
let ronda = 0

/* Start */

document.querySelector('#start--simon').onclick = function(){
    startSimon = true
    comprobarBotonStartSimon()
    hideStart()
    showRound()
    restart()
    organizadorRonda()
    hideScoreTrivia()
    mostrarConsignaSimon()
    hideConsignaTrivia ()
}


function hideConsignaTrivia(){
    document.querySelector('#consigna--trivia').className = 'oculto'
}

function mostrarConsignaSimon(){
    document.querySelector('#consigna--simon').className = ''
}

/*Secuencia de Botones*/

function mezclarColores(){
    const $botones = document.querySelectorAll('.button')
    const indice = Math.floor(Math.random() * $botones.length)
    return $botones[indice]
}

function comprobarBotonStartSimon(){
    if(startSimon === true){
        document.querySelector('#fila--botones1').id = 'btn1'
        document.querySelector('#fila--botones2').id = 'btn2'
    }else{
        document.querySelector('#btn1').id = 'fila--botones1'
        document.querySelector('#btn2').id = 'fila--botones2'
    }
}

function hideScoreTrivia(){ 
    document.querySelector('#score').className = 'oculto'
}

//Oculta boton start cuando se entra al Simon Dice

function hideStart(){ 
    document.querySelector('#start--simon').className = 'oculto'
}

function mostrarStart(){
    document.querySelector('#start--simon').className = ''
}

function desactivarBotonesMaquina(){
    document.querySelectorAll('button').forEach(function(item) {
    item.disabled = true;
    })
}

function activarBotonesJugador(){
    document.querySelectorAll('button').forEach(function(item) {
    item.disabled = false;
    })

    document.querySelectorAll('.button').forEach(function(item) {
    item.onclick = turnoJugador;
    })
}

function organizadorRonda(){
    desactivarBotonesMaquina()

    const $nuevoColor = mezclarColores()
    secuenciaMaquina.push($nuevoColor)

    const tiempoParaJugador = (secuenciaMaquina + 1) * 1000

    secuenciaMaquina.forEach(function(elemento, index){
        const retrasoMaquina = (index + 1) * 1000
        setTimeout(function(){
        resaltar(elemento)
        }, retrasoMaquina)  
    })

    setTimeout(function(){
    activarBotonesJugador()
    }, tiempoParaJugador)

    secuenciaJugador = []
    ronda++
    actualizoRonda()
    verificarRondaGanada()
}

function turnoJugador(e){
    const $boton = e.target
    resaltar($boton)
    secuenciaJugador.push($boton)

    const $colorMaquina = secuenciaMaquina[secuenciaJugador.length -1]
    if($boton.id !== $colorMaquina.id){
    perder()
    return
    }

    if(secuenciaJugador.length === secuenciaMaquina.length){
    desactivarBotonesMaquina()
    setTimeout(organizadorRonda, 1000)
    }
}

function resaltar($boton){
    $boton.style.opacity = 1;
    setTimeout(function(){
    $boton.style.opacity = 0.5
    }, 500)
}

function restart(){
    secuenciaJugador = []
    secuenciaMaquina = []
}

function showRound(){
    let $pRonda = document.querySelector('#ronda')
    $pRonda.className = ''
}

function actualizoRonda(){
let $pRonda = document.querySelector('#ronda')
    $pRonda.textContent = ronda
}

function ocultarRonda(){
    let $pRonda = document.querySelector('#ronda')
    $pRonda.className = 'oculto'
}

function perder(){
    Swal.fire({
        icon: 'error',
        title: '¡Te confundiste!',
        text: 'Volvé a intentarlo',      
    })
    mostrarStart()
    reiniciarJuego()
}

function reiniciarJuego(){
    startSimon = false
    ronda = 0
    ocultarRonda()
    comprobarBotonStartSimon()
    mostrarStart()
}


function mostrarFinal(){
    document.querySelector('#final').className = ''
}

function hideConsignaSimon(){
    document.querySelector('#consigna--simon').className = 'oculto'
}

function hideStartSimon(){
    document.querySelector('#start--simon').className = 'oculto'
}

function hideRondaSimon(){
    document.querySelector('#ronda').className = 'oculto'
}

function hideGameSimon(){
    document.querySelector('#color--1').className = 'oculto'
    document.querySelector('#color--2').className = 'oculto'
    document.querySelector('#color--3').className = 'oculto'
    document.querySelector('#color--4').className = 'oculto'

}

function verificarRondaGanada(){
    if(ronda === 6){
        Swal.fire({
            icon: 'success',
            title:'Hemos podido llegar antes e hicimos el encantamiento escudo Protego para que no pueda ingresar!',
        })
        mostrarFinal()
        hideStartSimon()
        hideConsignaSimon()
        hideRondaSimon ()
        hideGameSimon ()
    }
}




