export function Log(info: string = '') {
    return function (target, propertKey: string, descritpion: PropertyDescriptor) {
        console.log(`Log decorator running: Target: ${target}, info: ${info}`);
    };
}

export function LogClass(info: string) {
    return function (constructor: Function) {
        console.log(`LogClassdecorator running: Class: ${constructor}, info ${info}`);
    };
}
