
/*
    for...in loop 

    The for...in statement iterates over all enumerable string properties of an object 
    (ignoring properties keyed by symbols), including inherited enumerable properties.

    Syntax : 
            for(variable in object) {
                // code block to be executed
            }

*/

const anyObj = {
    name: "Saurabh",
    age: 20,
    city: "Gondia",
    pincode: 441807,
    isLoggedIn : true,
}

for(const key in anyObj){
    // console.log(key);
    console.log(`${key} : ${anyObj[key]}`);
}

console.log("********************************");

const myArray = [1,3,4,5,6,7,8,9,10,11,12]

for(const key in myArray){
    console.log(myArray[key]);
}