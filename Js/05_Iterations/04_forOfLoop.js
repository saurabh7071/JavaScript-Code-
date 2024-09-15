<<<<<<< HEAD:Js/05_Iterations/04_forOfLoop.js

/* 
    For...Of loop 

for (const variableName of iterable) {
    // Statement
}

*/

let iterable = [1, 2, 3, 4, 5]
for (const value of iterable) {
    console.log(value);
}

console.log("********************************");


const myName = "Saurabh"
for (const char of myName) {
    console.log(char);
}

console.log("********************************");

// Iterating over a map 

const myMap = new Map();
myMap.set('frd1' , "Rajnandan")
myMap.set('frd2' , "Abhay")
myMap.set('frd3' , "Prajwal")
myMap.set('frd4' , "Pavan")

console.log(myMap);

console.log("********************************");

console.log(myMap.get('frd3'));
console.log(myMap.get('frd1'));
console.log(myMap.entries());

console.log("********************************");

for (const myFrdName of myMap) {
    console.log(myFrdName);         // array ke formate me aate hai 
}

console.log("********************************");

for (const [key,value] of myMap) {
    // console.log(key,value);
    console.log(value);             // only values hi dega 
}

console.log("********************************");

//  Iterating over a set 

const mySet = new Set();
mySet.add(10);
mySet.add(40);
mySet.add(50);
mySet.add(100);

console.log(mySet.values());    // {10,40,.....}
console.log(mySet.entries());   // Array [10 , 10] [40 , 40] .....

console.log("********************************");

const toPrintSingleValue = mySet.keys();

console.log(toPrintSingleValue.next().value); // 10
console.log(toPrintSingleValue.next().value); // 40
console.log(toPrintSingleValue.next().value); // 50

console.log("********************************");

for (const setValues of mySet) {
    console.log(setValues);
}

console.log("********************************");

// Iterating over the arguments object 

function myArgument(){
    for(const values of arguments){
        console.log(values);
    }
}

=======

/* 
    For...Of loop 

for (const variableName of iterable) {
    // Statement
}

*/

let iterable = [1, 2, 3, 4, 5]
for (const value of iterable) {
    console.log(value);
}

console.log("********************************");


const myName = "Saurabh"
for (const char of myName) {
    console.log(char);
}

console.log("********************************");

// Iterating over a map 

const myMap = new Map();
myMap.set('frd1' , "Rajnandan")
myMap.set('frd2' , "Abhay")
myMap.set('frd3' , "Prajwal")
myMap.set('frd4' , "Pavan")

console.log(myMap);

console.log("********************************");

console.log(myMap.get('frd3'));
console.log(myMap.get('frd1'));
console.log(myMap.entries());

console.log("********************************");

for (const myFrdName of myMap) {
    console.log(myFrdName);         // array ke formate me aate hai 
}

console.log("********************************");

for (const [key,value] of myMap) {
    // console.log(key,value);
    console.log(value);             // only values hi dega 
}

console.log("********************************");

//  Iterating over a set 

const mySet = new Set();
mySet.add(10);
mySet.add(40);
mySet.add(50);
mySet.add(100);

console.log(mySet.values());    // {10,40,.....}
console.log(mySet.entries());   // Array [10 , 10] [40 , 40] .....

console.log("********************************");

const toPrintSingleValue = mySet.keys();

console.log(toPrintSingleValue.next().value); // 10
console.log(toPrintSingleValue.next().value); // 40
console.log(toPrintSingleValue.next().value); // 50

console.log("********************************");

for (const setValues of mySet) {
    console.log(setValues);
}

console.log("********************************");

// Iterating over the arguments object 

function myArgument(){
    for(const values of arguments){
        console.log(values);
    }
}

>>>>>>> 71c2669 (final commit):05_Iterations/04_forOfLoop.js
myArgument(5,7,8,4);