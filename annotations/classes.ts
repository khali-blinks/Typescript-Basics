class Vehicle {
  drive(): void {
    console.log('Vroom Vroom');
  }
  honk(): void {
    console.log('Beep Beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Vroom Vroom from Car');
  }
  honk(): void {
    console.log('Beep Beep from Car');
  }
}
const car = new Car();
car.drive();
car.honk();

export {}
// If files are not modules (i.e., they don’t have import/export statements), 
// all declarations merge into the global scope, causing conflicts
// Add export {} to make each file a module (isolated scope)