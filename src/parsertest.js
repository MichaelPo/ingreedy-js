"use strict";
console.log('Ok... die erste meldung');

var result = Ingreedy.parse('280 gr Mehl');
console.log('amount: ' + result.amount);
console.log('unit: ' + result.unit);
console.log('container: ' + result.container);

console.log('ingredient: ' + result.ingredient);