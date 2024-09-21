// def interface
interface Vehicle{
 Make: string;
 Model:string;
 Year:number ;
 Start():void ;
}

// implementation claas
class Car implements Vehicle {
    Make: string;
    Model: string;
    Year: number;

    constructor(Make: string, Model: string, Year: number) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
    }
Start(): void {
    
        console.log(`The ${this.Make} ${this.Model} (Year: ${this.Year}) is starting.`);
      }
}



const myCar =  new Car ("mercedes" ,"G-class", 2024);
myCar.Start();