import { faker } from '@faker-js/faker';

const address = {
  street: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode('11404'),
  country: faker.location.country(),
};

const infoUser ={
    name:faker.person.firstName(),
    lastName:faker.person.lastName(),
    phone:`(809) ${faker.string.numeric(3)}-${faker.string.numeric(4)}`
};

export {address,infoUser}