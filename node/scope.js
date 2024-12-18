"use strict";

let sharedVariable; // Globale Variable

function privateVar() {
  let privateVariable = "Ich bin privat!";
  console.log(privateVariable); // Zugriff innerhalb der Funktion
}

function globalVar() {
  sharedVariable = "Ich bin jetzt global zugänglich!";
  console.log(sharedVariable); // Gibt: "Ich  global zugänglich!" aus
}


globalVar(); // Gibt "Ich bin global zugänglich!" aus

privateVar(); // Gibt "Ich bin privat!" aus

try {
  console.log(privateVariable); // Fehler: privateVariable is not defined

} catch (e) {
  console.log(e);
}
