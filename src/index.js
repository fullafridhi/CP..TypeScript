// implementation claas
var Car = /** @class */ (function () {
    function Car(Make, Model, Year) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
    }
    Car.prototype.Start = function () {
        console.log("The ".concat(this.Make, " ").concat(this.Model, " (Year: ").concat(this.Year, ") is starting."));
    };
    return Car;
}());
var myCar = new Car("mercedes", "G-class", 2024);
myCar.Start();
