// Lernziel: Dom-Manipulation unter Verwendung einer Function. Datum und Uhrzeit anzeigen. Werte aus einem Inputfeld im HTML ausgeben.
// Verwende den Code der vorherigen Aufgabe Level 1_2.
// Erstelle ein Input-Feld und einen Button im HTML.
// Erstelle eine Function, die die Eingabe aus einem Textfeld erfasst und dann diesen Text im HTML-Dokument anzeigt.
// Schreibe in der Function ein zusätzliches Statement: document.getElementById("test").innerHTML = "<h1>Hello h1<h1>";
// Verwende .innerHTML, um das Datum hinzuzufügen: Date.

function dayTime(){
    console.log(new Date(8.64e15).toString());
    console.log(new Date(8.64e15 + 1).toString());
    document.getElementById("test").innerHTML = "<h1>Hello h1</h1>";
}
dayTime();