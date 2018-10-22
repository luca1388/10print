# 10print

Nodejs implementation of the famous one-line Commodore 64 BASIC program: 
```
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
```
let print = require("10print");
print.goto10();
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* _10 PRINT_ (http://10print.org/)
