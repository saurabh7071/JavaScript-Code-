<<<<<<< HEAD:Js/05_Iterations/06_forEachMethod.js
/*
    Array.forEach() method 

    The forEach() method of Array instances executes a provided function once for each array element.
    

    Syntax : 
             Array.forEach(callbackFn)

             CallbackFn : A function to execute for each element in the array. Its return value is discarded. 
             The function is called with the following arguments:

            element : The current element being processed in the array.
            index : The index of the current element being processed in the array.  
            array : The array forEach() was called upon.


    Return value : None (undefined).

    Note : The forEach() method is an iterative method. It calls a provided callbackFn function once for each 
            element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and 
            is not chainable. The typical use case is to execute side effects at the end of a chain. 

*/

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

console.log("********************************");

const num = [1,2,3,4,5,6,7,8,9,10]

num.forEach((element) =>{
    console.log(element);
});

console.log("********************************");

const frdName = ["A", "B", "C", "D", "E"]

frdName.forEach(function (elements){
    console.log(elements);
})

console.log("********************************");

function alphabets(item){
    console.log(item);
}

frdName.forEach(alphabets);     // Function ka sirf reference dena hai use excute nahi karana

console.log("********************************");

frdName.forEach((item,index,array) =>{
    console.log(item,index,array);
})

console.log("********************************");

const cars = [
    {
      make: "Toyota",
      model: "Fortuner",
      year: 2022
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2023
    },
    {
      make: "Toyota",
      model: "land cruiser",
      year: 2020
    },
    {
      make: "TaTa",
      model: "Nexon",
      year: 2020
    },
    {
      make: "TaTa",
      model: "punch",
      year: 2023
    },
    {
      make: "Honda",
      model: "City",
      year: 2022
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2022
    },
    {
      make: "Ford",
      model: "Fusion",
      year: 2021
    },
]

cars.forEach((item) =>{
    console.log(item);
})

console.log("********************************");

cars.forEach((item) =>{
    console.log(item.model);
})

console.log("********************************");

cars.forEach((item) =>{
    console.log(item.make + " " + item.model + " " + item.year);
})

console.log("********************************");

// converting for loop to forEach 

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}
console.log(copyItems);

// after
items.forEach((item) => {
  copyItems.push(item)
});
console.log(copyItems);
=======
/*
    Array.forEach() method 

    The forEach() method of Array instances executes a provided function once for each array element.
    

    Syntax : 
             Array.forEach(callbackFn)

             CallbackFn : A function to execute for each element in the array. Its return value is discarded. 
             The function is called with the following arguments:

            element : The current element being processed in the array.
            index : The index of the current element being processed in the array.  
            array : The array forEach() was called upon.


    Return value : None (undefined).

    Note : The forEach() method is an iterative method. It calls a provided callbackFn function once for each 
            element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and 
            is not chainable. The typical use case is to execute side effects at the end of a chain. 

*/

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

console.log("********************************");

const num = [1,2,3,4,5,6,7,8,9,10]

num.forEach((element) =>{
    console.log(element);
});

console.log("********************************");

const frdName = ["A", "B", "C", "D", "E"]

frdName.forEach(function (elements){
    console.log(elements);
})

console.log("********************************");

function alphabets(item){
    console.log(item);
}

frdName.forEach(alphabets);     // Function ka sirf reference dena hai use excute nahi karana

console.log("********************************");

frdName.forEach((item,index,array) =>{
    console.log(item,index,array);
})

console.log("********************************");

const cars = [
    {
      make: "Toyota",
      model: "Fortuner",
      year: 2022
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2023
    },
    {
      make: "Toyota",
      model: "land cruiser",
      year: 2020
    },
    {
      make: "TaTa",
      model: "Nexon",
      year: 2020
    },
    {
      make: "TaTa",
      model: "punch",
      year: 2023
    },
    {
      make: "Honda",
      model: "City",
      year: 2022
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2022
    },
    {
      make: "Ford",
      model: "Fusion",
      year: 2021
    },
]

cars.forEach((item) =>{
    console.log(item);
})

console.log("********************************");

cars.forEach((item) =>{
    console.log(item.model);
})

console.log("********************************");

cars.forEach((item) =>{
    console.log(item.make + " " + item.model + " " + item.year);
})

console.log("********************************");

// converting for loop to forEach 

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}
console.log(copyItems);

// after
items.forEach((item) => {
  copyItems.push(item)
});
console.log(copyItems);
>>>>>>> 71c2669 (final commit):05_Iterations/06_forEachMethod.js
