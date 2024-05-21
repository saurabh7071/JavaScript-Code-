

// ******************** Number ************************

const num = 10  
console.log(num ,typeof num);

// Constructor 
const num1 = new Number(67)
console.log(num1,typeof num1);

// Number values represent floating point numbers like 37 or -9.8
const num2 = -9.8
console.log(num2 ,typeof num2);

// values of other type can be converted to number using the Number() function 
const str = "56"
const num3 = Number(str)
console.log(num3 ,typeof num3);

console.log("*********************************************");

// Unary Plus (+) : attempt to convert any other type of value into the number if it isn't already 

const x1 = 1
const y1 = -1

console.log(+x1);                // 1
console.log(+y1);                // -1
console.log(+'');               // 0
console.log(+true);             // 1
console.log(+false);            // 0
console.log(+"Hello");          // NaN

// Static Properties 

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);

// Static Methods 

console.log(Number.isFinite(0/0));      // false 
console.log(Number.isFinite(5/2));      // true
console.log(Number.isFinite(5/0));      // false 

console.log(Number.isInteger(0));       // true
console.log(Number.isInteger(-3));      // true
console.log(Number.isInteger(78));      // true
console.log(Number.isInteger(78.9));    // false

console.log("******************************************");

// Instance Methods 

const num6 = 45.987

console.log(num6.toFixed(2));       // 45.99

const num7 = num6.toString()

console.log(num7 ,typeof num7);             // 45.987  string 
console.log(num6.toString().length);        // 6 

console.log(num6.toPrecision(2));       // 46
console.log(num6.toPrecision(3));       // 46.0
console.log(num6.toPrecision(4));       // 45.99

const num8 = 10000000

console.log(num8.toLocaleString());     // According to US Standards 
console.log(num8.toLocaleString('en-IN'));     // According to Indian Standard 

const numObj = new Number(42);
console.log(typeof numObj);         // object 

const num9 = numObj.valueOf();
console.log(num9);


// ******************************* Math *******************************************

console.log("**************************************************");

// Static Properties 

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LOG10E);
console.log(Math.LN2);
console.log(Math.LOG2E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2)

// Static methods

console.log(Math.abs(-15));          // 15
console.log(Math.acos(0.5));       // 1.047197551196
console.log(Math.asin(0.5));       // 0.523598775598
console.log(Math.atan(0.5));       // 0.463647609001
console.log(Math.atan2(1,1));      // 0.78539816339
let x = 3;
let y = 4;
console.log(Math.ceil(x/y));       // 1
console.log(Math.cos(1));          // -0.988031624091
console.log(Math.exp(2));          // 7.38905609893
console.log(Math.floor(1.006));    // 1
console.log(Math.log(100));        // 4.60517018599
console.log(Math.max(2,3,1));      // 3
console.log(Math.min(2,3,1));      // 1
console.log(Math.pow(2,3));        // 8
console.log(Math.round(1.006));   // 1
console.log(Math.sign(10));        // 1
console.log(Math.sin(0));          // 0
console.log(Math.sqrt(16));        // 4
console.log(Math.tan(1));          // 1.55740772462
console.log(Math.trunc(1.006));   // 1
console.log(Math.cbrt(37));       // 3

// Instance properties and methods of the Math object can be accessed through a number variable

console.log((1).toString());      // "1"
console.log(numObj.toFixed(2));   // "42.00"
console.log(Number.isInteger(42)); // true

// ****************************  *********************************

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + 10);
