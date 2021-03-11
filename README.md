# 10print

Nodejs implementation of the famous one-line Commodore 64 BASIC program: 
```js
10 PRINT CHR$(205.5+RND(1)); : GOTO 10. 
```
This project was inspired by _10 PRINT_ book (http://10print.org/) where you can find all the information about the original program.
This script will print on the console an infinite random sequence composed only by chars `/` and `\` in a fancy pattern.

## Getting Started

To run this script you only need to install and import the npm package, then running the `goto10` function. Of course don't forget to kill the process to interrupt the infinite loop :)

### Installing
```
npm install 10print
```

### Usage
For a basic usage run `goto10()` to print the standard pattern: 
```
let p = require("10print");
p.goto10();
```

If you want to create your own custom pattern it's possible to call `printPattern(config)` in this way:
```js
p.printPattern({
    symbol1: "/", // The first symbol of your pattern
    symbol2: "\\", // The second symbol of your pattern
    weight: 0.5 // Value between 0 and 1 that tunes the probability of each symbol to be displayed
})
```
This is the configuration of the standard pattern. Changing `weight` value would create a new one with different symbol frequency: setting 0 means to have 100% chance to get first symbol, 1 means 100% chance to get second. With 0.5 there is 50% chance for each symbol.
You can change this value and the symbols as well to create your custom pattern.

### Developing
Install all the dependencies:
```
npm install
```
No build is needed. To run the tests:
```
npm test
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* _10 PRINT_ (http://10print.org/)
