'use strict';

var ingreedyMatchers = {
    toBeParsedAs: function(util, customEqualityTesters) {
        return {
            compare: function(inputString, expected) {
                var parserResult;
                var specResult = {};

                try {
                    parserResult = Ingreedy.parse(inputString);
                } catch (err) {
                    specResult.pass = false;
                }

                if (specResult.pass !== false) {
                    specResult.pass = util.equals(parserResult, expected);
                }

                if (specResult.pass) {
                    specResult.message = 'Ingreedy successfully parsed "' + inputString + '"';
                } else {
                    specResult.message = 'Ingreedy parsed \n' + JSON.stringify(parserResult) + '\ninstead of \n' + JSON.stringify(expected);
                }

                return specResult;
            }
        }
    }
};

describe("Ingreedy", function() {
    var parser = Ingreedy;

    beforeEach(function() {
        jasmine.addMatchers(ingreedyMatchers);
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for 1 TL Olivenöl', function() {
            expect('1 TL Olivenoel').toBeParsedAs({
                amount: '1',
                unit: 'TL',
                ingredient: 'Olivenoel'
            });
        });
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for 6 Lammkoteletts (à ca. 80 g) ', function() {
            expect('6 Lammkoteletts (à ca. 80 g)').toBeParsedAs({
                amount: '6',
                ingredient: 'Lammkoteletts (à ca. 80 g)'
            });
        });
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for 3 Liter Milch', function() {
            expect('3 Liter Milch').toBeParsedAs({
                amount: '3',
                unit: 'Liter',
                ingredient: 'Milch'
            });
        });
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for Pfeffer', function() {
            expect('Pfeffer').toBeParsedAs({
                ingredient: 'Pfeffer'
            });
        });
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for 80 g Heidelbeere', function() {
            expect('80 g Heidelbeere').toBeParsedAs({
                amount: '80',
                unit: 'g',
                ingredient: 'Heidelbeere'
            });
        });
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for 300 g gegarte rote Beete', function() {
            expect('300 g gegarte rote Bete').toBeParsedAs({
                amount: '300',
                unit: 'g',
                ingredient: 'gegarte rote Bete'
            });
        });
    });

    describe('simple ingredient additions', function() {
        it('parses the correct values for 2 Stangen Staudensellerie', function() {
            expect('2 Stangen Staudensellerie').toBeParsedAs({
                amount: '2',
                unit: 'Stangen',
                ingredient: 'Staudensellerie'
            });
        });
    });

    describe('ingredient additions with a container', function() {
        it('parses the correct values for 1 gestrichene TL Sumach (oder Zitronenschale)', function() {
            expect('1 gestrichener TL Sumach (oder Zitronenschale').toBeParsedAs({
                amount: '1',
                ingredient: 'Sumach',
                container: {
                    amount: '28',
                    unit: 'oz'
                }
            });
        });
    });
});