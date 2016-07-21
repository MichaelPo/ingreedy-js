'use strict';

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
            expect(parser).toParseUnit('1 lb');
            expect(parser).toParseUnit('1 cup');
        });
    })

    describe('german units', function() {
        it('parses tassen', function() {
            expect(parser).toParseUnit('1 Tasse Mehl');
            expect(parser).toParseUnit('2 Tassen Mehl');
            expect(parser).toParseUnit('1 T. Mehl');
            expect(parser).toParseUnit('1 Tas. Mehl');
        });
        it('parses pfund', function() {
            expect(parser).toParseUnit('1 Pfund Mehl');
            expect(parser).toParseUnit('2 Pfd. Mehl');
            expect(parser).toParseUnit('1 Pf Mehl');
        });

        it('parses loeffel', function() {
            expect(parser).toParseUnit('1 Löffel Zucker');
            expect(parser).toParseUnit('2 EL Zucker');
            expect(parser).toParseUnit('1 LFL. Zucker');
        });

        it('parses teeloeffel', function() {
            expect(parser).toParseUnit('3 teeloeffel Zucker');
            expect(parser).toParseUnit('3 TL. Zucker');
            expect(parser).toParseUnit('1 Teelöffel Zucker');
            expect(parser).toParseUnit('2 TL Zucker');
        });


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

        it('parses gestrichen', function() {
            expect(parser).toParseUnit('2 gestrichene Löffel Zucker');
            expect(parser).toParseUnit('1 teaspoon water');
            expect(parser).toParseUnit('1 tsp. water');
            expect(parser).toParseUnit('1 tsp water');
            expect(parser).toParseUnit('1 t. water');
            expect(parser).toParseUnit('1 t water');
        });
    });

    describe('metric units', function() {
        it('parses grams', function() {
            expect(parser).toParseUnit('2 grams water');
            expect(parser).toParseUnit('1 gram water');
            expect(parser).toParseUnit('1 gr. water');
            expect(parser).toParseUnit('1 gr water');
            expect(parser).toParseUnit('1 g. water');
            expect(parser).toParseUnit('1 g water');
        });

        it('parses kilogramm', function() {
            expect(parser).toParseUnit('2 kilogramm water');
            expect(parser).toParseUnit('1 kilogram water');
            expect(parser).toParseUnit('1 kg. water');
            expect(parser).toParseUnit('1 kg water');
        });

        it('parses liters', function() {
            expect(parser).toParseUnit('2 liters water');
            expect(parser).toParseUnit('1 liter water');
            expect(parser).toParseUnit('1 L. water');
            expect(parser).toParseUnit('1 l. water');
            expect(parser).toParseUnit('1 L water');
            expect(parser).toParseUnit('1 l water');
        });

        it('parses milligrams', function() {
            expect(parser).toParseUnit('2 milligrams water');
            expect(parser).toParseUnit('1 milligram water');
            expect(parser).toParseUnit('1 mg. water');
            expect(parser).toParseUnit('1 mg water');
        });

        it('parses milliliters', function() {
            expect(parser).toParseUnit('2 milliliters water');
            expect(parser).toParseUnit('1 milliliter water');
            expect(parser).toParseUnit('1 ml. water');
            expect(parser).toParseUnit('1 ml water');
        });
    });

    describe('imprecise units', function() {
        it('parses dashes', function() {
            expect(parser).toParseUnit('2 dashes salt');
            expect(parser).toParseUnit('1 dash salt');
        });

        it('parses handfuls', function() {
            expect(parser).toParseUnit('2 handfuls salt');
            expect(parser).toParseUnit('1 handful salt');
        });

        it('parses pinches', function() {
            expect(parser).toParseUnit('2 pinches salt');
            expect(parser).toParseUnit('1 pinch salt');
        });

        it('parses touches', function() {
            expect(parser).toParseUnit('2 touches salt');
            expect(parser).toParseUnit('1 touch salt');
        });
    });
});