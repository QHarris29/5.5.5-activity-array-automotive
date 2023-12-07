//this includes the vehicle class as a module
import { Vehicle } from './vehicleBaseClass.js'; // Using require syntax

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);

    this.maximumPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.needsService = false; // Changed the property name to needsService
  }

  loadPassenger(num) {
    // Logic for loading passengers
    if (this.passengers < this.maximumPassengers) {
      this.passengers += num;
      console.log(`Loaded ${num} passengers. Total passengers: ${this.passengers}`);
    } else {
      console.log("Maximum passengers reached.");
    }
  }

  start() {
    // Logic for starting the car
    if (this.fuel > 0) {
      console.log("Car started.");
    } else {
      console.log("Fuel is empty. Cannot start.");
    }
  }

  stop() {
    // Logic for stopping the car
    console.log("Car stopped.");
  }

  checkService() {
    // Logic for checking service
    if (this.mileage > 30000) {
      this.needsService = true;
      console.log("Time for maintenance/service.");
    } else {
      console.log("No maintenance needed yet.");
    }
  }
}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000);

myCar.start();
myCar.loadPassenger(5);
//myCar.stop(); // Uncomment this line if a stop method is implemented in the Car class.
myCar.checkService();
myCar.maximumSpeed(200);
console.log(myCar);

