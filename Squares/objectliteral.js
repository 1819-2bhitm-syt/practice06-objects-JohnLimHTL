let square1 = {
    length: 5,
    getArea: function () {
        return this.lenght * this.lenght;
    }
};

console.log("1. Quadrat: Seitenlänge = " + square1.lenght + ", Fläche = " + square1.getArea());

let square2 = {
    length:10,
    getArea: function () {
        return this.lenght * this.lenght;
    }
};

console.log("2. Quadrat: Seitenlänge = " + square2.lenght + ", Fläche = " + square2.getArea());
