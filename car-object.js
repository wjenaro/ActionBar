// Car object constructor
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.currentSpeed = 0;
}

// Method to accelerate the car
Car.prototype.accelerate = function(speed) {
  this.currentSpeed += speed;
  console.log("Accelerating. Current speed: " + this.currentSpeed + " mph");
};

// Method to brake and reduce speed
Car.prototype.brake = function(speed) {
  this.currentSpeed -= speed;
  console.log("Braking. Current speed: " + this.currentSpeed + " mph");
};

// Method to turn on the car's headlights
Car.prototype.turnOnHeadlights = function() {
  console.log("Headlights turned on.");
};

// Method to turn off the car's headlights
Car.prototype.turnOffHeadlights = function() {
  console.log("Headlights turned off.");
};

// Creating a car object instance
var myCar = new Car("Toyota", "Camry", 2022, "Blue");

// Accessing properties
console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);
console.log("Year: " + myCar.year);
console.log("Color: " + myCar.color);

// Using methods
myCar.accelerate(50); // Accelerating. Current speed: 50 mph
myCar.brake(20); // Braking. Current speed: 30 mph
myCar.turnOnHeadlights(); // Headlights turned on.
myCar.turnOffHeadlights(); // Headlights turned off.
