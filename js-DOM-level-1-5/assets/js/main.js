// In dieser Aufgabe sollst du eine Funktion schreiben, die ausgeführt wird, wenn du auf den Button "Zeige mir die URL!" klickst.
// Filtere über die Funktion showURL() die URL der Seite heraus und lasse sie dir unterhalb des Buttons anzeigen.

function showURL(){
    console.log(window.location.href);
   
document.getElementById("href").innerHTML = 
        "The full URL of this page is:<br>" + window.location.href;
}
showURL();