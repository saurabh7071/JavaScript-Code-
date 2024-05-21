
/*  
    function --------------------
                                |
    Array -------------------> object ---------------------> None
                                |
    String ----------------------


*/


// object 

let vehicals = {
    suzuki : "desire",
    Hyundai : "i20",
    Toyota : "Fortuner",

    getVehicalDetails : function(){
        console.log(`Hyundai price is : ${this.Hyundai}`);
    }
}

// object me extra power add kar di , jo ki sabse top hirarchy pe hota hia iske through ab sab jaise ki 'array' , 'string' ye log is new property ko access kar sakte hai
Object.prototype.saurabh = function(){
    console.log("All vehical details are reserved!");
}

// abhi hamane Array me ander ek extra power add ki
Array.prototype.Rajnadan = function(){
    console.log("Kya ye object ko accessible honga ? ");
}
// ji nahi ye object ko accessible nahi honga 


// Array 
let bikes = ["Hero","Honda","Platina","Activa"]

vehicals.saurabh()  // ye object ke liye 
bikes.saurabh()     // ye array ke liye
// vehicals.Rajnadan() // y object ke liye 

console.log("*************************************");

// Inheritance 

const client = {
    username : "Rakshak",
    password : "pass@123",
    greeting(){
        console.log("Good Morning My friends!");
    }
}

const shop1 = {
    location : "New Mumbai",
    greet(){
        console.log("Hello Dosto!");
    }
}

const shop2 = {
    name : "Motorama",
    address : "Bombay"
}

const shop3 = {
    customerSupport : true,
    __proto__ : shop2   // ye method  use hoti hai , properties ko inherit karne ke liye 
}

// The __proto__ property is a non-standard way of accessing an object's prototype
//  It provides access to an object's prototype in some JavaScript environments, although its use is discouraged in favor of the standardized Object.getPrototypeOf() and Object.setPrototypeOf() methods.
shop1.__proto__ = client
console.log(shop1.greeting()); 


// Modern Syntax 

// Object.setPrototypeOf(obj, prototype)
// obj: The object whose prototype you want to set.
// prototype: The object that should become the prototype of obj.
                       
                //    kon ,  kiska
Object.setPrototypeOf(shop2, shop1);
console.log(shop2.greet());


console.log("********************************");

// Ek problem solution -- hame true length nikalni hai string ki

let username = "Saurabh       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is : ${this.trim().length}`);
}

username.trueLength()

// similar of other names 

"Rajnandan         ".trueLength()
"Abhay        ".trueLength()

