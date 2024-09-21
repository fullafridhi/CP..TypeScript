"use strict";
class Car {
    constructor(Make, Model, Year) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
    }
    Start() {
        console.log(`The ${this.Make} ${this.Model} (Year: ${this.Year}) is starting.`);
    }
}
const myCar = new Car("mercedes", "G-class", 2024);
myCar.Start();
