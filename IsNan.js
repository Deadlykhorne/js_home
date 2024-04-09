function myIsNaN(value) {
    // Перевірка, чи є вхідне значення числом та чи не дорівнює воно самому собі
    return typeof value === 'number' && value !== value;
}

console.log(myIsNaN(4)); // false
console.log(myIsNaN('4')); // false
console.log(myIsNaN('abc')); // false
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(undefined)); // false