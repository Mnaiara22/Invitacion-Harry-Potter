//Memotest 

let counterMemo = 0
let check = []
let memoCards = ['Harry','Harry','Hermione','Hermione','Ron','Ron'] //Opciones de cartas
let start = false
let gamesWon = 0

//Interacción Clicks

document.querySelector('#start').onclick = function(){
    start = true
    buttonStart() //Empezar
    shuffleCards() //Mezclar
    assignCards() //Asignar
    hideStart() //Ocultar
    hideIntro()
    mostrarConsignaMemotest()
    hideBienvenida ()
}
/*
const main = document.querySelector (`main`)

async function getData () {
        const res = await fetch ("http://hp-api.herokuapp.com/api/characters")
        const photos = await res.json ()
        photos.forEach(p => {

// codigo para crear la tarjeta
const card = document.createElement(`div`)
card.className = "card"

const img = ddocument.createElement (`img`)
img.src = p.image

const titulo = document.createEkenebt (`h3`)
titulo.textContent = p.name

card.append (img, titulo)
main.append (card)               

})

}

getData()*/

function mostrarConsignaMemotest(){
    document.querySelector('#consigna--memotest').className = ''
}

function hideIntro(){
    document.querySelector('#intro').className = 'oculto'
}

function hideBienvenida(){
    document.querySelector('#bienvenida').className = 'oculto'
}

document.querySelector('#card--1').onclick = function(){
    let card1 = document.querySelector('#p--1')
    card1.className = 'mostrar'    
    check.push(card1.textContent)
    time()
}

document.querySelector('#card--2').onclick = function(){
    let card2 = document.querySelector('#p--2')
    card2.className = 'mostrar'    
    check.push(card2.textContent)  
    time()
}

document.querySelector('#card--3').onclick = function(){
    let card3 = document.querySelector('#p--3')
    card3.className = 'mostrar'
    check.push(card3.textContent)    
    time()
}

document.querySelector('#card--4').onclick = function(){
    let card4 = document.querySelector('#p--4')
    card4.className = 'mostrar'
    check.push(card4.textContent)
    time()
}

document.querySelector('#card--5').onclick = function(){
    let card5 = document.querySelector('#p--5')
    card5.className = 'mostrar'
    check.push(card5.textContent)
    time()
}

document.querySelector('#card--6').onclick = function(){
    let card6 = document.querySelector('#p--6')
    card6.className = 'mostrar'
    check.push(card6.textContent)
    time()
}


//Funciones 

function checkResult(){  

    if(check.length === 2 && check[0] == check[1]){
        asignarCorrecto()
        reiniciarValorComprobar()
            
    }else if(check.length === 2 && check[0] != check[1]){
        document.querySelectorAll('.mostrar').forEach(function(item) {
        item.className = 'oculto';
        })
        reiniciarValorComprobar()
        }
    else if(check.length >= 2){
            document.querySelectorAll('.mostrar').forEach(function(item) {
                item.className = 'oculto';
            })
            reiniciarValorComprobar()
        }
}     

function reiniciarValorComprobar(){
    check=[]
}

function asignarCorrecto(){
    document.querySelector('.mostrar').className = 'correcto'
    document.querySelector('.mostrar').className = 'correcto'
    comprobarVictoria()
}

function assignCards(){
        document.querySelector('#p--1').innerText = memoCards[0]
        document.querySelector('#p--2').innerText = memoCards[1]
        document.querySelector('#p--3').innerText = memoCards[2]
        document.querySelector('#p--4').innerText = memoCards[3]
        document.querySelector('#p--5').innerText = memoCards[4]
        document.querySelector('#p--6').innerText = memoCards[5]
}

function shuffleCards(){
    memoCards.sort(()=> Math.random() - 0.5)
    console.log(memoCards)
}

function time(){
    setTimeout(checkResult, 50);
}

function buttonStart(){
    if(start === true){
        document.querySelector('#fila--cartas1').id = 'sect1'
        document.querySelector('#fila--cartas2').id = 'sect2'
    }else{
        document.querySelector('#sect1').id = 'fila--cartas1'
        document.querySelector('#sect2').id = 'fila--cartas2'
    }
}

function comprobarVictoria(){
let victoria = document.querySelectorAll('.correcto')
    if(victoria.length === 6){
        mostrarStartTrivia() 
    }   
}

function hideStart(){
    document.querySelector('#start--trivia').className = 'oculto'
}

function mostrarStartTrivia(){
    document.querySelector('#start--trivia').className = ''
}




