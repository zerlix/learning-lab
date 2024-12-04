#!/usr/bin/env node

console.log("Hallo, Torsten!");

// Ein Beispiel mit der `fs`-Modul zur Dateiverwaltung
const fs = require("fs");
fs.writeFileSync("testdatei.txt", "Das ist ein Test!");

// Ein Beispiel mit `child_process`, um Linux-Befehle auszuführen
const { exec } = require("child_process");
exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.error(`Fehler: ${error.message}`);
        return;
    }
    console.log(`Ergebnis des Befehls:\n${stdout}`);
});
