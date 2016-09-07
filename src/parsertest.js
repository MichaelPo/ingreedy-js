"use strict";
console.log('Ok... die erste meldung');

 var string = "280 gr Mehl\n150 gr kartoffeln"; 

var result = Ingreedy.parse(string);

console.log(JSON.stringify(result)); 

/*
console.log('amount: ' + result.amount);
console.log('unit: ' + result.unit);
console.log('container: ' + result.container);

console.log('ingredient: ' + result.ingredient);
*/