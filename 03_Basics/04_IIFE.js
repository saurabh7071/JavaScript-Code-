
/*

IIFE - Immediately Invoked Function Expression 

Global Scope ke pollution se problem create hoti hai, Us global scope ke variables or declaration ke pollution
        ko hatane ke liye hum IIFE ka use karte hai 

Kisi function ko immediately call karna raha to bhi IIFE function ka use kiya jata hai 

Semicolon is must after the IIFE function for end the Function excution 

There are Two ways to write IIFE Function 
1) Named IIFE
2) Simple IIFE

*/


// Simple Function 

function add(a,b){
    console.log(a+b); // Output: 5
}
add(5,7);

// Arrow Function 

const fun = () =>{
    console.log(`This is the Arrow Function`);
}
fun();


// IIFE Function - Named IIFE
(function addTwoNumber(a,b){
    console.log(a+b);
})(8,9);


// Simpe IIFE
((name) =>{
    console.log(`hey! ${name} is here.`);
})("Saurabh");


// How to return any value from IIFE function 
const result = (function(a,b){
    return a+b;
})(0,2);

console.log(result);

