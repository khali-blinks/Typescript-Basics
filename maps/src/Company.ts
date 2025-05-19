import { faker } from '@faker-js/faker';

export class Company {
  CompanyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.CompanyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.CompanyName}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}