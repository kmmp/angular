// klasy
// interface Customer2 {
//     name: string;
//     age: number;
// }

// let customer: Customer2 = {
//     name: 'Marcin',
//     age: 27
// };
interface CanTalk {
    talk(): string;
}

class Person {
    constructor(protected name: string, public age: number) {
    }

    welcome() {
        return(`Welcome ${this.name}, ${this.age}`);
    }

    isAdult() {
        if (this.age >= 18) {
            return true;
        } else {
            return false;
        }
    }
}


class Customer2 extends Person {
    advisor: string;

    constructor(name: string, age: number, advisor: string) {
        super(name, age);
        this.advisor = advisor;
    }

    welcome() {
        return `Good morning ${this.name}`;
    }
}

let customer2 = new Person('Marcin', 27);

console.log(customer2);

console.log(customer2.welcome());
console.log(customer2.isAdult());

console.log(new Customer2('Kasia', 15, 'Agata').isAdult());

let jan: Person = new Customer2('Hania', 4, 'Marcin');

console.log(jan.welcome());

