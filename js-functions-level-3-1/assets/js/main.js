// Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe des <body> und die Textfarbe der <h1>.
// Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.
// In deinem JS definierst du dann die Funktionalität, d.h. du schreibst jeweils eine eigene Funktion für die SuperBalls.

// Teste immer deine Ergebnisse mit einem console.log.
// Näheres zum onclick-Event.
// Hier findest du Informationen darüber, wie man den DOM mit Javascript verändert.
// Wenn du ein paar Infos über die transform-Eigenschaft haben willst, klicke hier.
// Beispiele und Erklärungen zu der Eigenschaft border-radius findest du hier.
// Mit gradients können Verläufe erstellt werden. Schaue dir hier ein paar Beispiele an.

const headline = document.getElementById('headline');
console.log(headline);

const body = document.querySelector('body');
console.log(body);

function klickBall1(){
    headline.style.color = 'olive';
    body.style.backgroundColor = 'plum';
}

function klickBall2(){
    headline.style.color = 'lightgray';
    body.style.backgroundColor = 'black';
}

function klickBall3(){
    headline.style.color = 'lightblue';
    body.style.backgroundColor = 'cyan';
}

function klickBall4(){
    headline.style.color = 'lightgold';
    body.style.backgroundColor = 'darkgray';
}