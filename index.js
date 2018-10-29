/**
 * It prints the standard pattern
 */
function goto10() {
    // Calling printPattern() with default parameters to have the original function
    printPattern();
};

/**
 * It prints a custom pattern definied by the 3 parameters weight, symbol1 and symbol2 
 * @param {Object} params Object containing the weight in the pattern of the 2 symbols provided by symbol1 and symbol2
 * @param {*} probe Callback function used to pass to the pattern configurations instead of printing it. Used for testing purposes
 */
function printPattern({
    symbol1 = defaultSymbol1,
    symbol2 = defaultSymbol2,
    weight = defaultWeight
} = {}, probe) {
    // Converting custom weight to valid number - fallbacks to defaultWeight if not a number
    _weight = typeof parseFloat(weight) === "number" ? parseFloat(weight) : defaultWeight;
    // Limiting weight to value between 0 and 1 
    // and moving it back by offset to match the range -0.5 < weight < 0.5
    _weight = (_weight > 1 ? 1 : _weight < 0 ? 0 : _weight) - offset;
    // Taking first char in case parameters are string with more chars. Taking default symbols in case of object
    _firstSymbol = typeof symbol1 === "object" ? defaultSymbol1 : String(symbol1).charAt(0);
    _secondSymbol = typeof symbol2 === "object" ? defaultSymbol2 : String(symbol2).charAt(0);

    if (typeof probe === "function") {
        // It returns to the callback the pattern configuration
        probe({w: _weight, s1: _firstSymbol, s2: _secondSymbol, o: offset});
    } else {
        // goto10 with custom parameters
        while(process.stdout.write(Math.round(Math.random() - _weight) ? _firstSymbol : _secondSymbol));    
    }
};

const defaultSymbol1 = "/";
const defaultSymbol2 = "\\";
const defaultWeight = offset = 0.5;
let _weight, _firstSymbol, _secondSymbol;

exports.goto10 = goto10;
exports.printPattern = printPattern;