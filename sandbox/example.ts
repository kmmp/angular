console.log('Hello world!');

let x = 3;
let y: string;
let z: boolean;

y = 'napis';

z = true;


console.log(x, y, z);

// tablice
let xs: number[] = [1 , 2, 3];

console.log(xs.length);

let ys: Array<number>;

xs[0] = 4;

let zs = [1, 5, 7, ...xs];

console.log(zs);

// interpolacja stringów

let g = 'aaa';
let gg = 'aaa';

let ggg = `Liczba x = ${x}`;
console.log(ggg);

console.log(`tablica xs ${xs[1] + 5}, ${zs[0]}`);

// kompilacja TypeScript do JavaScript
// tsc patch.ts


// funkcje
function weclome(name: string, age: number = 27, surname?: string ): string {
    console.log(`Welcome ${name}`);
    return name;
}

function welcome2(...names: string[]): string {
    return `Welcome ${names.join(', ')}`;
}
console.log(weclome('Marcin'));
console.log(welcome2('Marcin', 'Kasia'));

// funkcje anonimowe oraz arrow function
function welcome3(name: string): string {
    return `Welcome ${name}`;
}

console.log([ 'Marcin', 'Kasia' ].map(welcome3));
console.log([ 'Marcin', 'Kasia' ].map(function (name: string) {
    return `Welcome ${name}`;
}));

console.log([ 'Marcin', 'Kasia' ].map(name => `Welcome ${name}`));

// interfejsy
interface Customer {
    name: string;
    age?: number;
    address: Address;
}

interface Address {
street: string;
city: string;
}

function welcome4(customer: Customer): string {
    return `Welcome ${customer.name}, ${customer.address.city}`;
}

console.log(welcome4({
    name: 'Miłosz',
    age: 27,
    address: {
        street: 'Ulica',
        city: 'Pruszków'
    }
}));

// instrukcje sterujące

x = 5;
if (x > 10) {
    console.log(x);
}

let numbers = [1, 2, 3];

for (const n of numbers) {
    console.log(n);
}

// enumeracje

enum CustomerType {
    Standard = 10,
    Premium,
    VIP
}

function welcome5(customer: Customer, ct: CustomerType): string {
    if (ct === CustomerType.Premium) {
    return `Welcome ${customer.name}, ${customer.address.city}`;
    }
}

console.log(CustomerType.Premium);
console.log(CustomerType[CustomerType.Premium]);
