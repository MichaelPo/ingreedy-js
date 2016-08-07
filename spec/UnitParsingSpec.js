'use strict';
function umlautReplace(a) {	
	a = a.replace("ä", "ae");
	a = a.replace("ö", "oe");
	a = a.replace("ü", "ue");
	a = a.replace("Ä", "ae");
	a = a.replace("Ö", "oe");
	a = a.replace("Ü", "ue");

	a = a.replace("ß", "ss");
    return a;  
}

var unitMatchers = {
    toParseUnit: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var parserResult;
                var specResult = {};

                try {
                    parserResult = actual.parse(expected);
                } catch (err) {
                    specResult.pass = false;
                }

                if (specResult.pass !== false) {
                    specResult.pass = !util.equals(parserResult.unit, null);
                    specResult.pass = !util.equals(parserResult.unit, undefined);
                }

                if (specResult.pass) {
                    specResult.message = 'Ingreedy successfully parsed the unit "' + parserResult.unit + '" from "' + expected + '"'
                } else {
                    specResult.message = 'Expected Ingreedy to parse the unit from "' + expected + '", but it didn\'t.'
                }

                return specResult;
            }
        }
    }
};

describe("Unit parsing", function() {
    var parser = Ingreedy;

    beforeEach(function() {
        jasmine.addMatchers(unitMatchers);
    });

    describe('ingredients without units', function() {
        it("doesn't parse a unit", function() {
            expect(parser).not.toParseUnit('2 coconuts');
        })

        describe('ingredients with names that start with a unit name', function() {
            it("doesn't parse a unit", function() {
                expect(parser).not.toParseUnit('2 cupcakes');
            })
        });
    });

    describe('when nothing follows the unit', function() {
        it('parses the unit', function() {
            expect(parser).toParseUnit('1 Pfeffer');
            expect(parser).toParseUnit('1 Salz');
        });
    })

    describe('german units', function() {
        it('parses tasse', function() {
            expect(parser).toParseUnit('1 Tasse Mehl');
            expect(parser).toParseUnit('1 Tas. Mehl');
            expect(parser).toParseUnit('2 Tassen Mehl');
        });
        it('parses pfund', function() {
            expect(parser).toParseUnit('1 Pfund Mehl');
            expect(parser).toParseUnit('2 Pfd. Mehl');
        });

        it('parses loeffel', function() {
            expect(parser).toParseUnit('1 Löffel Zucker');
            expect(parser).toParseUnit('2 EL Zucker');
            expect(parser).toParseUnit('1 LFL. Zucker');
            expect(parser).toParseUnit('3 teeloeffel Zucker');
            expect(parser).toParseUnit('3 Tl. Zucker');
            expect(parser).toParseUnit('1 Teelöffel Zucker');
            expect(parser).toParseUnit('2 TL Olivenöl');
        });
    });

    describe('metric units', function() {
        it('parses gramm', function() {
            expect(parser).toParseUnit('20 gramm Zucker');
            expect(parser).toParseUnit('10 g zucker');
            expect(parser).toParseUnit('30  gr. Zucker');

        });

        it('parses liter', function() {
            expect(parser).toParseUnit('1 Liter Milch');
            expect(parser).toParseUnit('2 Ltr. Milch');
            expect(parser).toParseUnit('1 l Milch');
        });

        it('parses kilogramm', function() {
            expect(parser).toParseUnit('2 kilogramm Schweinefleisch');
            expect(parser).toParseUnit('1 kilogram Rind');
            expect(parser).toParseUnit('3 kg. Rind');
        });

        it('parses liter', function() {
            expect(parser).toParseUnit('3 Liter Wasser');
            expect(parser).toParseUnit('1 L. Milch');
            expect(parser).toParseUnit('3 Ltr Wasser');
        });


    });

    describe('imprecise units', function() {
        it('parses gestrichen', function() {
            expect(parser).toParseUnit('2 gestrichener Löffel Zucker');
            expect(parser).toParseUnit('1 gestrichene Löffel Salz');
        });

        it('parses handvoll', function() {
            expect(parser).toParseUnit('1 handvoll Äpfel');
            expect(parser).toParseUnit('2 handvolle Äpfel');
        });

        it('parses prise', function() {
            expect(parser).toParseUnit('1 Prise Zucker');
            expect(parser).toParseUnit('2 Prisen Salz');
        });

        it('parses stangen', function() {
            expect(parser).toParseUnit('2 stangen Lauch');
            expect(parser).toParseUnit('1 Stange Lauch');
        });

        it('parses koerniger', function() {
            expect(parser).toParseUnit('1 körniger xyz');
            expect(parser).toParseUnit('2 körnige xyz');
        });
    });
});