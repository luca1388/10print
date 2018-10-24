// Standard pattern
function goto10() {
    // Calling printPattern() with default parameters to have the original function
    printPattern();
};

// Custom pattern
function printPattern({
    symbol1 = defaultSymbol1,
    symbol2 = defaultSymbol2,
    weight = defaultWeight
} = {}) {
    // Converting custom weight to valid number - fallbacks to defaultWeight if not a number
    _weight = typeof parseFloat(weight) === "number" ? parseFloat(weight) : defaultWeight;
    // Limiting weight to value between 0 and 1 
    // and moving it back by offset to match the range -0.5 < weight < 0.5
    _weight = (_weight > 1 ? 1 : _weight < 0 ? 0 : _weight) - offset;
    // Taking first char in case parameters are string with more chars
    _firstSymbol = String(symbol1).charAt(0);
    _secondSymbol = String(symbol2).charAt(0);

    // goto10 with custom parameters
    while(process.stdout.write(Math.round(Math.random() - _weight) ? _firstSymbol : _secondSymbol));
};

const defaultSymbol1 = "/";
const defaultSymbol2 = "\\";
const defaultWeight = offset = 0.5;

let _weight, _firstSymbol, _secondSymbol;

exports.goto10 = goto10;
exports.printPattern = printPattern;