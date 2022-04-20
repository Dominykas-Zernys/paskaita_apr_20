import Animal from './Animal';

export default class Mammal extends Animal {
  fourLegs: boolean;
  constructor(b: string, f: boolean, s: string, f4: boolean) {
    super(b, f, s);
    this.fourLegs = f4;
  }
}
