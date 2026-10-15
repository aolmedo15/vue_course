

// // console.log('Inicio');

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((resolve, reject) => {
//     // console.log('cuerpo de la promesa');
//     setTimeout(() => {
//         // resolve('Mi amigo cumplió');
//         reject('Mi amigo no cumplió');
//     }, 1000);
// })
//     .then((message) => console.log(message))
//     .catch(errorMessage => console.log(errorMessage))
//     .finally(() => console.log('Finalizó la promesa'));

// console.log('Final');

export const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);

            hero ? resolve(hero) : reject(`Hero not found #${id}`);

        }, 1500);
    });
}

getHeroByIdAsync(1)
    .then(hero => console.log('El heroe es: ', hero.name))
    .catch(err => console.warn(err));