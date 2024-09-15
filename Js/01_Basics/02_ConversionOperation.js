
let age = 45;

console.log(typeof age);    // number
console.log(typeof(age));   // number 

// ***********************************

let num = "45"

console.log(typeof num);    // String 

// ***********************************

let checkType = Number(num);    // convert into the number 
console.log(typeof checkType);  // number 

// ***********************************

let age1 = "33abc"

let tempContainer = Number(age1)    // Now the type of age1 variable must be Number 
console.log(typeof tempContainer);  // number --> jab ki 33abc koi number to nahi ho sakta hai n ... 
console.log(tempContainer);         // NaN --> but jab uska Number kya aaya hai vo check karne gaye to hame ye mila .. 
                                    // NaN --> Not a Number 
                                    /*
                                        To js me yesa hota hai ki jab hum "33abc" ko convert karne jayenge to 
                                        vo convert honga but jab uski value check karne jayenge ki kya aayi hai
                                        tab hame NaN milega 
                                    */

// ************************************

let value = null;

console.log(typeof value);          // object 

let checkValue = Number(value);
console.log(typeof checkValue);     // number 
console.log(checkValue);            // 0 

// **************************************

let value1 = undefined; 

console.log(typeof value1);            // undefined 

let checkValue1 = Number(value1);
console.log(typeof checkValue1);       // number
console.log(checkValue1);              // NaN

// **************************************

// let booleanValue = true;
let booleanValue = false;

console.log(typeof booleanValue);                   // boolean

let checkBooleanValue = Number(booleanValue);
console.log(typeof checkBooleanValue);              // number
console.log(checkBooleanValue);                     // 1 for true and 0 for false 

// ***************************************

// let isLogedIn = 1;
let isLogedIn = 0;

console.log(typeof isLogedIn);                  // number

let booleanIsLogedIn = Boolean(isLogedIn);
console.log(typeof booleanIsLogedIn);           // boolean 
console.log(booleanIsLogedIn);                  // true if number is 1 and false if number is 0 

// ****************************************

// let str = "Saurabh";
let str = "";

let booleanStr = Boolean(str)
console.log(booleanStr);                        // true --> if any string convert into boolean 
                                                // false --> for empty string 

// *****************************************

let number = 786

let stringNumber = String(number)
console.log(stringNumber);                      // 786
console.log(typeof stringNumber);               // string 

// ****************************************

let a = "55"

console.log(a+3);                               // 553 not 58 

a = Number(a) + 5
console.log(a);                                 // 60 

// *****************************************
console.log("*******************************");

// Conversion and equality 

console.log(5 === 5);           // true
console.log(true === true);     // true 
console.log(5 === '5');         // false
console.log(true === 1);        // false 

console.log(5 == 5);
console.log('5' == 5);              // all are true 
console.log(true == true);
console.log(true == 1);

// **********************************************
// parseInt() method : This function parses a string and return an integer 

let str5 = "89"                       // --> 89 
// let str5 = "89.5"                        // --> 89
let num5 = parseInt(str5)
console.log(num5);                     // 89
console.log(typeof num5);             // number


// parseFloat() method : This function parses a string and return a floting point number 

let pi = 3.14                       // --> 3.14
// let pi = 3                       // --> 3 
let floatValue = parseFloat(pi)
console.log(floatValue);
console.log(typeof floatValue);     // number

// ************************************************************

// toFixed() method : this method formate a number to a specific decimal precision and retun it as a string 

let num2 = 3.14159
console.log(num2.toFixed(2));          // 3.14

// ***********************************************************

// toString() method : convert the value of its corresponding string representation 

// let num8 = false
let num8 = 57
let var2 = num8.toString();
console.log(var2);  
console.log(typeof var2);       // String 

// **********************************************************
console.log("********************************************");

// object to primitive conversion 
// object to boolean conversion 

// using boolean() constructor 

let obj1 = {name: 'John', age: 30};         // true 
let bool = Boolean(obj1);                 
console.log(bool);
console.log(typeof bool);

// using !! operator 

let obj2 = {}
let  bool1 = !!obj2;
console.log(bool1);

// *****************************************************************