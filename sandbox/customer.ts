// moduły
import {LogClass, Log} from './decorators';

export class Person {
    constructor(protected name: string, private age: number) {}
    welcome(): string {
        return `Hello from ${this.name}, age ${this.age}`;
    }
}

@LogClass('info')
export class Customer extends Person {
    constructor(name: string, age: number, private advisor) {
        super(name, age);
    }

    @Log()
    welcome(): string {
        return `Hello from customer ${this.name}, advised by ${this.advisor}`;
    }
}


// powinno być let ale samo zamienia na const
export let persons: Array<Person>  =
 [
    new Person('Jan', 44),
    new Person('Agata', 23),
    new Person('Ola', 33)
];

export function welcome() {
    console.log('Welocme');
}

