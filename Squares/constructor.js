function Square(length) {
    this.length = length;

    this.getArea = function () {
        return this.length * this.length;
    };
}

// console.log("1. Quadrat: Seitenlänge = " + square1.length + ", Fläche = " + square1.getArea());

// let square2 = new Square(50);
// console.log("2. Quadrat: Seitenlänge = " + square2.length + ", Fläche = " + square2.getArea());

// console.log(`1. Quadrat: Seitenlänge = ${square1.length}, Fläche = ${square1.getArea()}`);

let square1 = new Square(20);

console.log(`1. Quadrat:
Seitenlänge = ${square1.length}, Fläche = ${square1.getArea()}
`);

let square2 = new Square(50);

console.log(`2. Quadrat:
Seitenlänge = ${square2.length}, Fläche = ${square2.getArea()}
`);

