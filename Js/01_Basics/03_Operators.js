
let value = 67
let negativeValue = -value
console.log(negativeValue);         // -67

/*
    Arithmetic Operators  :- use for arithmetic calculation in javascript 

    + -> addition 
    - -> Substration 
    * -> Multiplicaiton 
    / -> Division
    % -> Reminder / Modulo
    ** -> Power / Exponent 
*/

console.log(5**2);                 // 25 
console.log(Math.pow(5,2))         // 25 

console.log(10 + 35 * 2);           // 10 + 70 = 80 

let calculation = (18 / 9) * 2;     // 4 --> left to right associativity 
console.log(calculation);              

console.log((18 * 9) / 2);          // 81 

console.log((18 % 9) * 2);          // 0 --> precedence of multiplication is greater than the reminder 

// ************************************************

let str1 = "Saurabh"
let str2 = " Vaidya"

let str3 = str1 + str2;
console.log(str3);

// ************************************************

console.log(1 + "2");           // 12
console.log("1" + 2);           // 12
console.log("1" + 2 + 2);       // 122
console.log(1 + 2 + "2");       // 32

// ***********************************************

console.log(true);      // true 
console.log(+true);     // 1
// console.log(true+);
console.log(+"");       // 0 

console.log("***********************************************");

// Binary Operator : Binary operator requires two operands one before the operator and one after the operator 

// Ex : 3 + 4 , 8 * 2 --> This form is called an infix binary operator because operator is placed between two operands 
console.log("Binary Operator");

console.log("***********************************************");

// Unary Operator : Unary operator require single operand either before or after the operator

// Ex : ++x --> This form is called a prefix unary operator 
//      x++ --> postfix unary operator 
console.log("Unary Operator");

console.log("***********************************************");

// Assignment Operator : Assign operator assign a value to its left operand based on the value of its right operand 

console.log("Assignment Operator");

// Assignement (=)
let x = 56
let y = 40

console.log(x);             // 56
console.log(x = y + 10);    // 50

// Addition Assignemnt , Substration Assignement , Multiplication Assignment , Division Assignment 

let p = 10;
console.log(p += 4);                // 14 
let anyVariable = (p += "Don");     // 14Don
console.log(anyVariable);       
console.log(typeof anyVariable);    // string --> type conversion 

let q = 5;
console.log( q -= 1);       // 4 
console.log(q *= 5);        // 20
console.log(q /= 2);        // 10

// Unsigned right shift assignment : The unsigned right shift assignment (>>>=) operator performs unsigned 
//                                  right shift on the two operands and assigns the result to the left operand.

let c = 5;                      // 00000000000000000000000000000101
c >>>= 2                        // 00000000000000000000000000000001 
console.log(c);     // 1

let d = 5                       // 00000000000000000000000000000101
d >>>= 3                        // 00000000000000000000000000000000
console.log(d);     // 0 

// Nullish Coalescing Assignment 


// Destructuring : extract data from arrays or objects

const [a , b] = [23 , 45];
const {name , age} = { name:"Saurabh", age:20};

console.log(a);
console.log(b);
console.log(name);
console.log(age);

console.log("***********************************************************************");

console.log("Comparison Operator");

// euqal (==) and strict equal (===)

console.log(9 == "9");  // true 
console.log(9 === "9"); // false 
console.log(9 != "9"); // false 
console.log(9 !== "9"); // true 

console.log("***********************************************************************");

console.log("Arithmetic Operator");

// (+) Unary plus : Attempt to convert the operand to a number if it is not already 

let e = +"3";
console.log(e);         // 3
console.log(typeof e);  // number 
console.log(+true);     // 1
console.log(+false);    // 0

console.log("***********************************************************************");

console.log("Bitwise Operator");
// Bitwise AND --> a & b    -- return one if both operands are ones 
// Bitwise OR --> a | b     -- return zero if both operands are zeros
// Bitwise XOR --> a ^ b    -- return zero if both are same & return one if both bits are different 
// Left Shift --> a << b    
// Right Shift --> a >> b    
// Zero-fill right shift --> a >>> b   

console.log(15 & 9);    // 9        1111 & 1001 = 1001
console.log(15 | 9);    // 15       1111 | 1001 = 1111
console.log(15 ^ 9);    // 6        1111 ^ 1001 = 0110
console.log(~15);       // -16      0000 0000 .... 0000 1111 = 1111 1111 .... 1111 0000 
console.log(~9);        // -10      0000 0000 .... 0000 1001 = 1111 1111 .... 1111 0110 

console.log("***********************************************************************");

console.log("Logical Operator");
// Logical AND --> a && b    -- return true if both operands are true
// Logical OR --> a || b    -- return true if at least one operand
// Logical NOT --> !a       -- return false if its single operand that can be converted to true otherwise return true 

let f = 90
let g = 95
let h = f > 50 && g > 50;       // true 
console.log(h);
let i = f > 50 || g < 50;       // true 
console.log(i);
let j = !(f > 50 || g > 50);    // false 
console.log(j);

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat

const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false

console.log("***********************************************************************");

console.log("BigInt Operator");

// This is because BigInt is neither a subset nor a superset of numbers. 
// BigInts have higher precision than numbers when representing large integers, but cannot represent decimals, 
// so implicit conversion on either side might lose precision.

let k = 50000000000000000000000000000n + 10000000000000000000000000000n;
console.log(k);

// const a = 1n + 2; // TypeError: Cannot mix BigInt and other types

// typeconversion 

console.log(Number(5n) + 5);    // 10
console.log(BigInt(5) + 5n);    // 10n

const l = 2n > 2; // false --> comparison does not implicitly convert the regular number to a BigInt.
                  // you need to explicitly convert one of them to match the type of the other by Number() function 
const o = 3n > 2; // true  --> JavaScript, implicitly convert the regular number 2 to a BigInt and then compare the two BigInt values
const s = 1n > 2; // false  
console.log(l,o,s);

const m = 2 > 2n; // false  --> the regular number 2 is not automatically converted to a BigInt
const n = 3 > 2n; // true --> the regular number 3 is implicitly converted to a BigInt before the comparison
const r = 1 > 2n; // false --> 
console.log(m,n,r);

console.log("***********************************************************************");

console.log("Conditional Operator");

let price = 40;
price > 50 ? console.log("Overprice") : console.log("price is ok");

let age1 = 20;
const status = age1 >= 21 ? "adult" : "Minor";
console.log(status);

console.log("************************************************************************");

console.log("Relational Operator");

// in operator --> returns true if the specified property is in the specified object 

const animals = ["Tiger","Dog","Cow","Ranveer Kapoor"];
console.log(0 in animals);      // true 
console.log(3 in animals);      // true
console.log(4 in animals);      // false 
console.log("Ranveer Kapoor" in animals);   // false 
// must specify the index number , not the value of the index 
console.log("length" in animals); // true --> length is an array property 

// built-in objets 
console.log("PI" in Math);      // true 

// instanceof --> return true if the specified object is of the specified object type 

const theDay = new Date(1999, 18, 23);
if(theDay instanceof Date){
    console.log("It is an instance of Data");
}

console.log("***********************************************************");

console.log("Increment, Decrement");

// Pre-increment --> The value is incremented before its current value is used 
let t = 99;
const u = ++t;
console.log(u);    // 6
console.log(t);    // 6

// Post-incremnt --> The current value of the variable is used in the expression before being incremented.
let v = 23
const w = v++;
console.log(w);    // 23
console.log(v);    // 24 


  