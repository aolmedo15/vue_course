
export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 12345,
        lat: 14.1234,
        lng: 34.1234
    }
}; //as const;

// const person2 = { ...person };
const person2 = structuredClone(person);

person2.lastName = 'Lannister';
person2.address.city = 'Los Angeles';

console.log({ person });
console.log({ person2 });
