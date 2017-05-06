"use strict";
console.log('Ok... die erste meldung');

 //var string = "280 gr Mehl\n150 gr kartoffeln"; 

var string =
    "(für etwa 10 Personen) " +
    "                                                                            1,5 kg Weißkohl " +
    "500 g Möhren " +
    "500 g Möhren " +
    "                                                                            2 Zwiebeln " +
    "                                                                            1 Bund Lauchzwiebeln " +
    "                                                                            Salz " +
    "                                                                            Pfeffer " +
    "                                                                            Zucker " +
    "                                                                                500 g Vollmilchjoghurt " +
    "                                                                            500 g Salatmayonnaise " +
    "                                                                            2 Esslöffel Zitronensaft " +
    "                                                                            2 bis 3 Esslöffel Wein­essig ";

var result = Ingreedy.parse(string);

for (var k=0;k<result.length;k++) {
    if (result[k].ingredient != '' && result[k].ingredient != null ) {
        console.log('row: ' + JSON.stringify(result[k]));
    }
}

//console.log(JSON.stringify(result));

/*
console.log('amount: ' + result.amount);
console.log('unit: ' + result.unit);
console.log('container: ' + result.container);

console.log('ingredient: ' + result.ingredient);
*/