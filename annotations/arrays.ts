const carMakers = ['Toyota', 'Honda', 'Ford'];  
const dates = [new Date(), new Date()];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['civic']
];
const carsByMake2: string[][] = [];

// Help with inference when extracting values
const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); 

// Help with 'map'
const carUppercase = carMakers.map((car: string): string => {
  return car.toUpperCase();
}
);

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
