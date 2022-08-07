let startTrivia = false

//Listado de preguntas - Opciones - Respuesta
//Question, choices y answer --> propiedades

const game = [
    {
    question: "La puerta esta cerrada, Con que hechizo podemos abrirla?",
    choices: ["Alohomora", "Confundus", "Expelliarmus", "Avada Kedavra"],
    answer: "Alohomora", // Tiene que estar igual que en la opcion
    },
    {
    question: "No puedo ver nada, con que hechizo puedo iluminar",
    choices: ["Accio", "Crucio", "Sectumsempra", "Lumos"],
    answer: "Lumos",
    },
    {
    question: "Necesito pasar y esta bloqueado, como muevo este objeto de lugar?",
    choices: ["Engorio", "Expecto Patronum", 'Wingardium Leviosa', 'Petrificus Totalus'],
    answer: "Wingardium Leviosa",
    },
];

document.querySelector('#start--trivia').onclick = function(){
  startTrivia = true
  buttonStartTrivia () // Empezar
  hideStartTrivia () // Ocultar
  hideMemotest()
  mostrarStartTrivia
  hideStart
  mostrarConsignaTrivia()
  hideConsignaMemotest ()
}

function mostrarConsignaTrivia(){
  document.querySelector('#consigna--trivia').className = ''
}

function buttonStartTrivia () {
  if(startTrivia === true){
    document.querySelector('#fila--trivia1').id = 'triv1'
} else {
  document.query ('#triv1').id = 'fila--trivia1'
}
}

function hideStart(){
  document.querySelector('#start').className = 'oculto'
}

function hideMemotest(){
  document.querySelector('#memotest').className = 'oculto'
}

function hideConsignaMemotest(){
  document.querySelector('#consigna--memotest').className = 'oculto'
}

function hideStartTrivia(){
  document.querySelector('#start--trivia').className = 'oculto'
}

function mostrarStartTrivia(){
  document.querySelector('#start--trivia').className = ''
}

document.querySelector('#fila--trivia1').onclick = function(){
  let quiz = document.querySelector('#triv1')
  quiz.className = 'mostrar'    
  check.push(quiz.textContent)
}


//Template de Preguntas

class Question {
    /**
     * @param {} text Pregunta
     * @param {} choices Opciones
     * @param {} answer Opcion correcta
     */
    //crea objeto nuevo - propiedades
    constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    }

    /**
     * @param {} choice Opcion elegida
     * @returns {} Devuelve si es correcta - booleano 
     */
    //crea objeto nuevo - metodo
    correctAnswer(choice) {
    return choice === this.answer;
    }
}

//Llamo a la estructura
// Uso map para que recorra
const questions = game.map(
    (question) => new Question(question.question, question.choices, question.answer)
);


//Logica
class Quiz {
    score = 0; // indica los puntos correctos
    counter = 0; // indica la cantidad de preguntas

    /**
     * @param {} questions Pregunta
     */
    constructor(questions) {
    this.questions = questions;
    }

    //Por que pregunta va
    questionNow() {
    return this.questions[this.counter];
    }

    //Analisis finalizo encuentra (compara la cantidad de preg con el conteo)
    finish() {
    return this.questions.length === this.counter;
    }

    //Si de la pregunta actual, a traves de correctAnswer es correcto, se aumenta el score en 1
    guess(answer) {
      if (this.questionNow().correctAnswer(answer)) {
          this.score++;
      }
      this.counter++;
      }
}

class UI {
    constructor() {}

    /**
     * @param {} text Pregunta
     */
    showQuestion(text) {
    const questionTitle = document.getElementById("question"); //Llamo al ID Question de HTML

    questionTitle.innerHTML = text;
    }

    /**
     * @param {} choices Opciones de respuesta
     */
    showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");//Llamo al ID Choices de HTML
    choicesContainer.innerHTML = ""; //Limpia luego de cada preg

    //Recorrer desde 0 hasta donde termine y aumentar, luego crear un boton
    for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");//crear boton segun la cantidad
        button.addEventListener("click", () => callback(choices[i])); // Ejecuta el texto que tiene el click
        button.innerText = choices[i];//Poner las opciones en un boton / Chices[i] hace que recorra

        choicesContainer.append(button);
    }
    }

    showScores(score) {
    const gameOverHTML = `
        <h2 id="score">Has respondido correctamente: ${score} pregunta/s</h2>
        `;

    const element = document.getElementById("quiz"); //selecciono el ID Quiz de HTML
    element.innerHTML = gameOverHTML;

    mostrarStartSimon() 

    }

    showProgress(currentIndex, total) {
    let element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`; //Muestra la pregunta por la que va
    }
}

//Carga la pagina
const renderPage = (quiz, ui) => {
  if (quiz.finish()) {//si ya finalizo
    ui.showScores(quiz.score); //Mostrar el score
  } else { //si no termino
    console.log(quiz); //mostrar todo de nuevo
    ui.showQuestion(quiz.questionNow().text);
    ui.showProgress(quiz.counter + 1, quiz.questions.length);
    ui.showChoices(quiz.questionNow().choices, (currenChoice) => {
      quiz.guess(currenChoice);
      renderPage(quiz, ui);
    });
  }
};

//Ejecuto 
function main() {
  const quiz = new Quiz(questions); //Llamo a las preguuntas
  const ui = new UI();

  renderPage(quiz, ui);
};

main()

function mostrarStartSimon(){
  document.querySelector('#start--simon').className = ''
}