console.log(2 == 2);
console.log(2 != 2);
console.log(2 >= 5);
console.log(2 <= 5);
console.log(1 > 2);
console.log(1 < 2);

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true --> due to type conversion 

// Note : The reasone is the an equality check (==) and comparisons (<, >, <=, >=) work differently 
// comparisons convert null to a number, treating it as 0.
// That why null >= 0 is true and null > 0 is false 

console.log(undefined > 0);
console.log(undefined >= 0);        // all are false 
console.log(undefined >= 0);
console.log(undefined == 0);