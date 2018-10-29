const p = require("../index");

describe('With no parameters provided it should create the standard pattern', () => {
    test('Weight should be 0 (balanced in the middle)', () => {
        p.printPattern({}, (response) => {
            expect(response.w).toBe(0);
        });
    });

    test('First symbol should be "/"', () => {
        p.printPattern({}, (response) => {
            expect(response.s1).toBe("/");
        });
    });

    test('Second symbol should be "\\"', () => {
        p.printPattern({}, (response) => {
            expect(response.s2).toBe("\\");
        });
    });
});

describe('Custom pattern creation', () => {
    test('Custom weight parameter must be used instead of default one', () => {
        const customWeight = 0.8;
        p.printPattern({weight: customWeight}, (response) => {
            expect(response.w + response.o).toBe(customWeight);
        });
    });

    test('Custom symbol1 parameter must be used instead of default one', () => {
        const customSymbol1 = "-";
        p.printPattern({symbol1: customSymbol1}, (response) => {
            expect(response.s1).toBe(customSymbol1);
        });
    });

    test('Custom symbol2 parameter must be used instead of default one', () => {
        const customSymbol2 = "+";
        p.printPattern({symbol2: customSymbol2}, (response) => {
            expect(response.s2).toBe(customSymbol2);
        });
    });

    test('Every custom parameters must be used when provided together', () => {
        const params = {
            weight: 0.3,
            symbol1: "<",
            symbol2: ">"
        };
        p.printPattern(params, (response) => {
            expect(response.w + response.o).toBe(params.weight);
            expect(response.s1).toBe(params.symbol1);
            expect(response.s2).toBe(params.symbol2);
        });
    });
});

describe('Special values of configuration must be handled correctly', () => {
    test('If one of the symbols are string and not char, the first char is used as symbol', () => {
        const params = {
            symbol1: "123",
            symbol2: "-^+*"
        };
        p.printPattern(params, (response) => {
            expect(response.s1).toBe("1");
            expect(response.s2).toBe("-");
        });
    });

    test('If one of the symbols is a number it should be converted to string', () => {
        const params = {
            symbol1: 4,
            symbol2: -2
        };
        p.printPattern(params, (response) => {
            expect(response.s1).toBe("4");
            expect(response.s2).toBe("-");
        });
    });

    test('If one of the symbols is an object it should be used the default symbol', () => {
        const s1 = {
            a: 12,
            b: "test"
        };
        const s2 = [1, 2, "test"];
        const params = {
            symbol1: s1,
            symbol2: s2
        };
        p.printPattern(params, (response) => {
            expect(response.s1).toBe("/");
            expect(response.s2).toBe("\\");
        });
    });
});