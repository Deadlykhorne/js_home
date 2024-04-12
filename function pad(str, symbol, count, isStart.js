function pad(str, symbol, count, isStart) {
    if (typeof str !== 'string' || typeof symbol !== 'string') {
        throw new Error('Перші два аргументи повинні бути рядками.');
    }

    if (isNaN(count)) {
        throw new Error('Третій аргумент повинен бути числом.');
    }

    const lengthDiff = Math.max(0, count - str.length);
    const padding = lengthDiff > 0 ? symbol.repeat(lengthDiff) : '';

    if (isStart) {
        return padding + str;
    } else {
        return str + padding;
    }
}

console.log(pad('qwerty', '+', 5, true)); // "+++++qwerty"
console.log(pad('qwerty', '+', 5, false)); // "qwerty+++++"
console.log(pad('qwerty', '+', 6, true)); // "+qwerty"
console.log(pad('qwerty', '+', 6, false)); // "qwerty+"
console.log(pad('qwerty', '+', 4, true)); // "++qwerty"
console.log(pad('qwerty', '+', 4, false)); // "qwerty++"