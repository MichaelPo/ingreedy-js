"use strict";
console.log('Ok... die erste meldung');

 //var string = "280 gr Mehl\n150 gr kartoffeln"; 

var string = 
"                                                                                                   Zutaten " +
" " +
"                                                                                                    für 2  Portionen " +
"                                                                                                    6 Lammkoteletts (à ca. 80 g) " +
"                                                                                                    Salz " +
"                                                                                                    Pfeffer " +
"                                                                                                    300 g gegarte Rote Bete " +
"                                                                                                    1 Zwiebel " +
"                                                                                                    2 TL Rapsöl " +
"                                                                                                    200 g körniger Frischkäse (0,8 % Fett) " +
"                                                                                                    1 Knoblauchzehe " +
"                                                                                                    Olivenöl bei Amazon bestellen 2 TL Olivenöl " +
"                                                                                                   Einkaufsliste drucken " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                   Zubereitungsschritte " +
" " +
" " +
" " +
"                                                                                                    1 " +
" " +
"                                                                                                   Lammkoteletts waschen, mit Küchenpapier trockentupfen und mit Salz und Pfeffer würzen. " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                    2 " +
" " +
"                                                                                                   Eine Grillpfanne erhitzen und die Koteletts darin bei starker Hitze auf jeder Seite 2-3 Minuten braten. Auf einen großen Teller geben und im vorgeheizten Backofen bei 100 °C (Umluft: 80 °C, Gas: Stufe 1) warm halten. " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                    3 " +
" " +
"                                                                                                   Inzwischen die Rote Bete trockentupfen und in Scheiben schneiden. Zwiebel schälen und fein würfeln. " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                    4 " +
" " +
"                                                                                                   Rapsöl in einer großen beschichteten Pfanne erhitzen und die Zwiebelwürfel darin glasig andünsten. Rote Bete und 3 EL Wasser zugeben. Mit Salz und Pfeffer würzen und bei mittlerer Hitze 3 Minuten dünsten. " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                    5 " +
" " +
"                                                                                                   Körnigen Frischkäse in eine Schüssel geben. Knoblauch schälen, durch eine Knoblauchpresse dazudrücken und den Frischkäse mit Salz und Pfeffer abschmecken. " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                    Videohilfe " +
" " +
" " +
" " +
"                                                                                                   Knoblauch richtig vorbereiten " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
" " +
"                                                                                                    6 " +
" " +
"                                                                                                   Lammkoteletts aus dem Ofen nehmen, mit dem Olivenöl beträufeln und mit der Roten Bete und dem Knoblauchfrischkäse anrichten. ";

var result = Ingreedy.parse(string);

console.log(JSON.stringify(result)); 

/*
console.log('amount: ' + result.amount);
console.log('unit: ' + result.unit);
console.log('container: ' + result.container);

console.log('ingredient: ' + result.ingredient);
*/