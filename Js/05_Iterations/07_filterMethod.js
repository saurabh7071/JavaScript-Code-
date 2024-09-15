<<<<<<< HEAD:Js/05_Iterations/07_filterMethod.js
/*
    Array.filter() method 

    The filter() method of array instances creates a shallow copy of a portion of a given array , 
    filtered down to just the elements from the given array that pass the test implemented by the provided 
    function.

    Syntax : 
             Array.filter( callbackFunction)

    Return value : Array , if no element pass the test then return empty array 

*/

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter( (item) =>{
    return item.length <= 5               // scope start kiya isiliye return likhana padta hai 
})

console.log(result);    // ['spray','elite'] --> those words which has lenght 5 

console.log("********************************");

const num = [1,2,3,4,5,6,7,8,9,10]

const result1 =  num.filter( (item) => item > 5)    // yaha directly bina scope ke likha hai isiliye return likhane ki jarurat nahi hai

console.log(result1);

console.log("********************************");

const firstArray = []
const secondArray = [1,3,5,7,9,11]

secondArray.forEach( (item) =>{
    if(item > 3){
        firstArray.push(item)
    }
});     
console.log(` firstArray : ${firstArray}`);

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
    {
      make: "Honda",
      model: "Fusion",
      year: 2021
    },
    {
      make: "Ford",
      model: "ecosport",
      year: 2021
    }
  ];

const year = cars.filter( (item) => item.year === 2021)
console.log(year);

console.log("********************************");

const companies = cars.filter((item) =>{
    return item.make === "Honda" && item.year === 2021
})
console.log(companies);

console.log("********************************");

const anyVar = cars.filter( (item) => item.make === "Toyota" || item.year > 2022)
console.log(anyVar);

console.log("********************************");

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log(filtered);

  console.log("********************************");

  // Find Prime numbers from the given array 

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
=======
/*
    Array.filter() method 

    The filter() method of array instances creates a shallow copy of a portion of a given array , 
    filtered down to just the elements from the given array that pass the test implemented by the provided 
    function.

    Syntax : 
             Array.filter( callbackFunction)

    Return value : Array , if no element pass the test then return empty array 

*/

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter( (item) =>{
    return item.length <= 5               // scope start kiya isiliye return likhana padta hai 
})

console.log(result);    // ['spray','elite'] --> those words which has lenght 5 

console.log("********************************");

const num = [1,2,3,4,5,6,7,8,9,10]

const result1 =  num.filter( (item) => item > 5)    // yaha directly bina scope ke likha hai isiliye return likhane ki jarurat nahi hai

console.log(result1);

console.log("********************************");

const firstArray = []
const secondArray = [1,3,5,7,9,11]

secondArray.forEach( (item) =>{
    if(item > 3){
        firstArray.push(item)
    }
});     
console.log(` firstArray : ${firstArray}`);

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
    {
      make: "Honda",
      model: "Fusion",
      year: 2021
    },
    {
      make: "Ford",
      model: "ecosport",
      year: 2021
    }
  ];

const year = cars.filter( (item) => item.year === 2021)
console.log(year);

console.log("********************************");

const companies = cars.filter((item) =>{
    return item.make === "Honda" && item.year === 2021
})
console.log(companies);

console.log("********************************");

const anyVar = cars.filter( (item) => item.make === "Toyota" || item.year > 2022)
console.log(anyVar);

console.log("********************************");

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log(filtered);

  console.log("********************************");

  // Find Prime numbers from the given array 

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
>>>>>>> 71c2669 (final commit):05_Iterations/07_filterMethod.js
