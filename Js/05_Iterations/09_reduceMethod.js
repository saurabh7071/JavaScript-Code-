<<<<<<< HEAD:Js/05_Iterations/09_reduceMethod.js

/*
    Array.reduce() method 

    The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element
     of the array, in order, passing in the return value from the calculation on the preceding element. 
     The final result of running the reducer across all elements of the array is a single value.

    The first time that the callback is run there is no "return value of the previous calculation". 
    If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used 
    as the initial value and iteration starts from the next element (index 1 instead of index 0).

    ye method specally items jab carts me add karne hote hai n unki total add karni hoti hai tab use aata hai
    isme kya hota hai ki initially accumulator ki value zero (0) hoti hai means jab cart khali rahegi to total
    zero hi rahegi nnn...
    fir jab carts me items add hote hai means ki currentValue fir us initial accumulator value ke sath add hoti hai
    or yese karke hame single total value end me miltati hai ...
    isme initial value zero (0) to dena hi padega ..
    Agar intial value zero (0) nahi diya to ye index 0 ko intial value consider karega means ki index 0 value 
    jo bhi hongi usko initial manega and fir index 1 ko current value man ke usme add kar dega but isse problem
    ho sakata hai kyu ki agar apne kuch bhi item cart me add hi nahi kiya hai  add fir bhi kuch value dikhayega to gadbad ho jayegi nn...
    isilye hamesh zero lena achha hota hai 
*/

const anyArr = [1,2,3,4,5]

const mytotal = anyArr.reduce( (accumulator , currentValue) =>{
    console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);
    return accumulator + currentValue
},0);

console.log(mytotal);

console.log("********************************");

const mytotal1 = anyArr.reduce( (acc,currValue) => acc + currValue,0)
console.log(mytotal1);

console.log("********************************");

let cart = [
    {
        productName: "hair Serem",
        price: 100
    },
    {
        productName: "hair Serum",
        price: 300
    },
    {
        productName: "hair oil",
        price: 150
    },
    {
        productName: "face Serum",
        price: 500
    },
    {
        productName: "Facewash",
        price: 200
    },
    {
        productName: "toner",
        price: 250
    },
]

// const total = cart.reduce( (sum,item) => sum + item.price,700)
// console.log(total);     // 2200 


const total = cart.reduce( (sum,item) => sum + item.price,0)
console.log(total);        // 1500




=======

/*
    Array.reduce() method 

    The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element
     of the array, in order, passing in the return value from the calculation on the preceding element. 
     The final result of running the reducer across all elements of the array is a single value.

    The first time that the callback is run there is no "return value of the previous calculation". 
    If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used 
    as the initial value and iteration starts from the next element (index 1 instead of index 0).

    ye method specally items jab carts me add karne hote hai n unki total add karni hoti hai tab use aata hai
    isme kya hota hai ki initially accumulator ki value zero (0) hoti hai means jab cart khali rahegi to total
    zero hi rahegi nnn...
    fir jab carts me items add hote hai means ki currentValue fir us initial accumulator value ke sath add hoti hai
    or yese karke hame single total value end me miltati hai ...
    isme initial value zero (0) to dena hi padega ..
    Agar intial value zero (0) nahi diya to ye index 0 ko intial value consider karega means ki index 0 value 
    jo bhi hongi usko initial manega and fir index 1 ko current value man ke usme add kar dega but isse problem
    ho sakata hai kyu ki agar apne kuch bhi item cart me add hi nahi kiya hai  add fir bhi kuch value dikhayega to gadbad ho jayegi nn...
    isilye hamesh zero lena achha hota hai 
*/

const anyArr = [1,2,3,4,5]

const mytotal = anyArr.reduce( (accumulator , currentValue) =>{
    console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);
    return accumulator + currentValue
},0);

console.log(mytotal);

console.log("********************************");

const mytotal1 = anyArr.reduce( (acc,currValue) => acc + currValue,0)
console.log(mytotal1);

console.log("********************************");

let cart = [
    {
        productName: "hair Serem",
        price: 100
    },
    {
        productName: "hair Serum",
        price: 300
    },
    {
        productName: "hair oil",
        price: 150
    },
    {
        productName: "face Serum",
        price: 500
    },
    {
        productName: "Facewash",
        price: 200
    },
    {
        productName: "toner",
        price: 250
    },
]

// const total = cart.reduce( (sum,item) => sum + item.price,700)
// console.log(total);     // 2200 


const total = cart.reduce( (sum,item) => sum + item.price,0)
console.log(total);        // 1500




>>>>>>> 71c2669 (final commit):05_Iterations/09_reduceMethod.js
