
// Variables and Constant

// Variables are containers that store value 
// Variables are used to store and manipulate data 
// 'let' keyword is use to declaring variables 

// *********************************************************************

// Constant --> such value which cannot be reassigned
const name = "Saurabh";
const age = 20;

// Reassignment ---> Not Allowed 
// name = "Unkown";
// age = 30;
console.log(name);
console.log(age);

// There is another way to print multiple values by just one method 
console.table([name, age]);

// ****************************************************************************************

// Variables ---> Such value which can be reassigned 
let myFrdName = "Chhagan";
let itsAge = 22;

console.log(myFrdName,itsAge);
console.table([myFrdName,itsAge]);

// Reassignment 
myFrdName = "Ashish";
itsAge = 25;

console.table([myFrdName,itsAge]);

// **********************************************************************

var email = "djrakesh@gmail.com"
var password = "123456789"

console.log(email,password);
console.table([email,password]);

// Reassignment 
email = "chhagansingh@yahoo.com";
password = "123456";

console.table([email,password]);

/*
    NOTE :- Prefer not to use var
            because of issue in block scope and functional scope ...
*/

// ***********************************************************************************

/*
    Scope : the area between two curly braces {......} is called scope.

    Global Scope : Variables declared outside of any function or block have global scope 
    Function Scope : Variables declared inside the function have function scope 
    Block Scope : introduced with 'let' and 'const' variables declared inside a block {.....} have block scope
*/

// ****************************************************************************

country = "Africa";
console.log(country);

// Reassignment 

country = "India";
console.log(country);

/*
    NOTE : but this is not a good way  
*/

// ***********************************************************************************

/* 
Hoisting --> Variable declaration are hoisted to the top of their scope 
              However the initilization are not hoisted

console.log(myVar); // myVar is not defined 
myVar = 55;

*/

// *************************************************************************************

// Undefined and Null 
// Undefined ---> A variable that has been declared but not assigend/ initialized a value is undefined
let price;
console.log(price); 

// null ---> null is an assignment value representing the intentional absence of any object value. 
let value = null;
console.log(value);

// **************************************************************************************

let xtreap = "hello, Its Me."

function fun(){
    console.log(xtreap);
}

fun();

// *************************************************************************************************

nam = "Saurabh";

function title(){
    console.log(nam);
}

title();

var nam;    // This is works because of hoisting 
