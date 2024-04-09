function pad(str, symbol, count, isStart) {
    if (typeof str !== 'string' || typeof symbol !== 'string') {
        throw new Error('Перші два аргументи повинні бути рядками.');
    }

    if (isNaN(count)) {
        throw new Error('Третій аргумент повинен бути числом.');
    }

    const lengthDiff = Math.max(0, count - str.length);
    const padding = symbol.repeat(Math.min(1, lengthDiff)); // Використав Math.min(1, lengthDiff), щоб додати не більше одного символа

    if (isStart) {
        return padding + str;
    } else {
        return str + padding;
    }
}

function padStart(str, symbol, count) {
    return pad(str, symbol, count, true);
}

function padEnd(str, symbol, count) {
    return pad(str, symbol, count, false);
}

console.log(padStart('qwerty', '+', 5)); // "+++++qwerty"
console.log(padEnd('qwerty', '+', 5)); // "qwerty+++++"
console.log(padStart('qwerty', '+', 6)); // "+qwerty"
console.log(padEnd('qwerty', '+', 6)); // "qwerty+"
console.log(padStart('qwerty', '+', 4)); // "+qwerty"
console.log(padEnd('qwerty', '+', 4)); // "qwerty+"