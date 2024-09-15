
// kis tarah se data ko memory me rakha jata hai and kaise access kiya jata ha , is basis per data ke do categorisation hai 
// primitive datatype 
// Non-premitive datatype 

// Primitive datatype  --> Call by value hote hai, matlab jabhi inko kahi se kahi copy karte hai, to inka jo original
//                         data hai, vo reference hame memory ka nahi diya jata, vo copy karke diya jata hai alag or
//                         jo bhi hum changes karte hai vo copy me changes hote hai 


// String 

let myFriendName = "Doga"

// Number 

let bookPrice = 100

// Boolean 

const isLoggedIn = false 

// null

const outsideTemp = null // --> empty 

// undefined 

let favSubject;
// OR
let favSubject1 = undefined // --> undefined

// Symbol 

const userId = Symbol("246");
const secondUserId = Symbol("245");

console.log(userId === secondUserId);      // false 

// BigInt

const bigInt = 9023434183248918n



// Non-Primitive (Reference) datatypes 

// Array

const array = ["classic", "Mongoose", "ladoo", "keyboard"]

// Objects 

let myObj = {
    yourName : "Inspector Dillo",
    yourAge : 30
}

// Functions

const myFunction = function(){
    console.log("Apne Elvish Bhai ke aage koi bol sakta hai kya, Elvish Bhaiiiiii");
}


 

