import Animal from './classes/Animal.js';
import Mammal from './classes/Mammal.js';
const a1 = new Animal('dog', true, 'woof');
a1.makeSound();
const a2 = new Animal('cat', true, 'meow');
a2.makeSound();
const m1 = new Mammal('Monkey', true, 'monkeySound', false);
console.log([a1, a2, m1]);
