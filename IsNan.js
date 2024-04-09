function myIsNaN(value) {
    return typeof value === 'number' && Number.isNaN(value); 
}

console.log(myIsNaN(4)); // false
console.log(myIsNaN('4')); // false
console.log(myIsNaN('abc')); // false
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(undefined)); // false