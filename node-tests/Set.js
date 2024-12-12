'use strict'


/* Ein Set ist eine JavaScript-Datenstruktur, die nur eindeutige Werte speichert.
 * [...new Set(array)]
 *    -- new Set(array) entfernt also automatisch alle Duplikate aus dem Array.
 *    -- Der Spread-Operator (...) wandelt das Set zurück in ein reguläres Array.
 * 
 * AUSGABE: [ 1, 2, 3, 6, 9, 5, 4, 8, 10, 7 ]
 *
 */
const array = [1, 1, 2, 3, 6, 6, 9, 9, 3, 1, 5, 4, 4, 8, 10, 7];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);



