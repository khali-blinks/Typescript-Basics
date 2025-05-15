class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// class Car extends Vehicle {
//  private drive(): void {
//    console.log('vroom');
//  }
//  startDrivingProcess(): void {
//    this.drive();
//    this.honk();
//  }
// }

export {}
// If files are not modules (i.e., they don’t have import/export statements), 
// all declarations merge into the global scope, causing conflicts
// Add export {} to make each file a module (isolated scope)