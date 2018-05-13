console.log('Hello world!');
var x = 3;
var y;
var z;
y = 'napis';
z = true;
console.log(x, y, z);
// tablice
var xs = [1, 2, 3];
console.log(xs.length);
var ys;
xs[0] = 4;
var zs = [1, 5, 7].concat(xs);
console.log(zs);
// interpolacja stringów
var g = 'aaa';
var gg = 'aaa';
var ggg = "Liczba x = " + x;
console.log(ggg);
console.log("tablica xs " + (xs[1] + 5) + ", " + zs[0]);
// kompilacja TypeScript do JavaScript
// tsc patch.ts
// funkcje
function weclome(name, age, surname) {
    if (age === void 0) { age = 27; }
    console.log("Welcome " + name);
    return name;
}
function welcome2() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return "Welcome " + names.join(', ');
}
console.log(weclome('Marcin'));
console.log(welcome2('Marcin', 'Kasia'));
// funkcje anonimowe
