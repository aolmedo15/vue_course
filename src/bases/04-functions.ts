// function greetPerson(name: string) {
//     return `Hola, ${name}`;
// }

// const greetPerson = (name: string) => {
//     return `Hola, ${name}`;
// }


export const greetPerson = (name: string) => `Hola, ${name}`;


export const getUser = (uid: string) => ({
    uid: uid,
    username: 'alexo'
});

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza'
    },
];


export const hero = heroes.find((h) => h.id === 2);

console.log(hero?.power?.toUpperCase())