interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

export {}
// If files are not modules (i.e., they don’t have import/export statements), 
// all declarations merge into the global scope, causing conflicts
// Add export {} to make each file a module (isolated scope)