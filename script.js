/*Code is wrapped in an anonymous function*/

(function() {

/*multilevel object literal with the questions*/

  const myQuestions = [
    
    {
    question: "Which actor played Neo in the movie Matrix?",
    answers: {
      a: "Martin Wallace",
      b: "Matt Daemon",
      c: "Keanu Reeves",
      d: "Bruce Willis",
      e: "Brad Pitt"
    },
    correctAnswer: "c",
    answered: false,
    value: 1
  },
  {
    question: "What is the author of the Song of Ice and Fire book series?",
    answers: {
      a: "H.P. Lovecraft",
      b: "Tolkien",
      c: "George R. R. Martin",
      d: "Stephen King",
      e: "Agatha Christie"
    },
    correctAnswer: "c",
    answered: false,
    value: 1
  },

 {
    question: "Which chess piece can only move in a diagonal?",
    answers: {
      a: "Torre",
      b: "Cavalo",
      c: "Bispo",
      d: "Peão",
      e: "Rainha"
    },
    correctAnswer: "c",
    answered: false,
    value: 1
  },

   {
    question: "What is the Bob Dylan's real name?",
    answers: {
      a: "Henri Stuart",
      b: "John Campbell",
      c: "Neil Harrington",
      d: "Robert Zimermann",
      e: "Henry Fisherman"
    },
    correctAnswer: "d",
    answered: false,
    value: 1
  },

   {
    question: "What is the world's biggest island?",
    answers: {
      a: "Islandia",
      b: "Finlândia",
      c: "Groelândia",
      d: "Nova Zelândia",
      e: "Madagascar"
    },
    correctAnswer: "c",
    answered: false,
    value: 1
  },
{
    question: "How many chemical elements does the periodic table have?",
    answers: {
      a: "125",
      b: "115",
      c: "118",
      d: "128",
      e: "105"
    },
    correctAnswer: "c",
    answered: false,
    value: 1
  },

{
    question: "How old was the oldest elephant that ever lived?",
    answers: {
      a: "86",
      b: "49",
      c: "142",
      d: "17",
      e: "67"
    },
    correctAnswer: "a",
    answered: false,
    value: 1
  },

  {
    question: "In a dart game, what is the maximum score in a single hit?",
    answers: {
      a: "30",
      b: "60",
      c: "100",
      d: "50",
      e: "75"
    },
    correctAnswer: "b",
    answered: false,
    value: 1
  },


  {
    question: "What is the last letter in the greek alphabet?",
    answers: {
      a: "Omega",
      b: "Zeta",
      c: "Gama",
      d: "Pi",
      e: "Delta"
    },
    correctAnswer: "a",
    answered: false,
    value: 1
  },

  {
    question: "Who was Alexander, the Great's tutor?",
    answers: {
      a: "Heráclito",
      b: "Aristóteles",
      c: "Sócrates",
      d: "Platão",
      e: "Sófocles"
    },
    correctAnswer: "b",
    answered: false,
    value: 1
  },

    {
    question: "Which one of these chemical element is liquid in the room temperature ?",
    answers: {
      a: "Enxofre",
      b: "Borio",
      c: "Cloro",
      d: "Mercurio",
      e: "Carbono"
    },
    correctAnswer: "d",
    answered: false,
    value: 1
  },

]

/*Variable declaration*/

let randomquestion = Math.floor(Math.random() * myQuestions.length);
let points = 0;
let questions =[];
let numbers = [];
let currentindex = 0;
let selected = [false, false, false, false, false, false, false, false, false, false];

/*Generate a 10-item array with random integers from 1 to 10. */

while(numbers.length < 10){
  var r = Math.floor(Math.random() * 10);
  if(numbers.indexOf(r) === -1) numbers.push(r);
}

/*When the page loads, create a 10-item array with 10 random questions according
to the random numbers previously generated. Call te function showQuestion() afterwards.*/

window.onload = function() {

  for (let index = 0; index < numbers.length; index++) {
    questions.push(myQuestions[numbers[index]]);
    
  }
  
  showQuestion(currentindex);
  
 };

 /*Main function to show a question according to a index of the questions array.
*/

 function showQuestion(number){

  /*Here begins the code to remove the check mark on radion buttons when user has not
  yet answered the question and to "remeber" which answer was previously answered
  when navigating between questions.*/

  const radioButtons = document.querySelectorAll('input[name="x"]'); 

  for (const radioButton of radioButtons) {
  radioButton.checked = false;
  }

  if(selected[currentindex].answered==true) {

  let a = selected[currentindex].answer;
  
  switch(a) {
    case "a":
      document.getElementById('letraA').checked = true;
      break;
    case "b":
      document.getElementById('letraB').checked = true;
    break;
    case "c":
      document.getElementById('letraC').checked = true;
    break;
    case "d":
      document.getElementById('letraD').checked = true;
    break;
    case "e":
      document.getElementById('letraE').checked = true;
    break;

  }

  }

   /*Here ends the code to remove the check mark on radion buttons when user has not
  yet answered the question and to "remeber" which answer was previously answered
  when navigating between questions.*/

   /*Insert the questions in the html, picked from the questions array*/
  
  document.getElementById("questiontext").innerHTML = questions[number].question;
  document.getElementById("questionA").innerHTML = questions[number].answers.a;
  document.getElementById("questionB").innerHTML = questions[number].answers.b;
  document.getElementById("questionC").innerHTML = questions[number].answers.c;
  document.getElementById("questionD").innerHTML = questions[number].answers.d;
  document.getElementById("questionE").innerHTML = questions[number].answers.e;

}

 /*Function to add the points when clicking to send the answers.*/

 function point () {

  for (let index = 0; index < selected.length; index++) {
    
    if(selected[index].answer == questions[index].correctAnswer) {

      points = points + questions[index].value;
    }
  }

  alert("Your final score is: " + points + "!");
  points = 0;

 }

/*Functions to navigate between questions.*/

function next() {

  if((currentindex + 1) > 9 ) {

    alert("You are already in the last question!");
    return null;

  }
  currentindex++;
  showQuestion(currentindex);

}

function previous() {

  if(((currentindex - 1) < 0) ) {

    alert("You are already in the first question!");
    return null;

  }

  currentindex--;
  showQuestion(currentindex);
 
}

 /*Function to mark answered questions by using a object literal.*/
  
function markAnswer() {

  if(!selected.answered) {
  selected[currentindex] = {answered: true, answer: document.querySelector('input[name="x"]:checked').value};
  }

}

 /*Event listeners*/

 document.getElementById("submit").addEventListener("click", point);
 document.getElementById("previous").addEventListener("click", previous);
 document.getElementById("next").addEventListener("click", next);
 document.getElementById("letraA").addEventListener("click", markAnswer);
 document.getElementById("letraB").addEventListener("click", markAnswer);
 document.getElementById("letraC").addEventListener("click", markAnswer);
 document.getElementById("letraD").addEventListener("click", markAnswer);
 document.getElementById("letraE").addEventListener("click", markAnswer);
    
})();