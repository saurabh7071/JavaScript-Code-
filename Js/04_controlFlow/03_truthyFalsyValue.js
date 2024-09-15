<<<<<<< HEAD

/*

    Falsy Value : false , 0 , -0 , BigInt (0n) , null , undefined , NaN , "" 

    Truthy Value : Truth , "0" , 'false' , " " , [] , {} , function(){} <-- empty function 

*/

const email = "saurabh@outlook.com"

if(email){
    console.log("Obtained email")
}else{
    console.log("Email is not obtained");
}

const value = 0 

if(value){
    console.log("value is obtained")
}else{
    console.log("value is not obtained");
}


// How to check Array is empty ?

const array = []

if(array.length === 0 ){
    console.log("Array is Empty")
}else{
    console.log("Array is not Empty");
}

// How to check object is empty ?

const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Object is Empty");
}else{
    console.log("Object is not Empty");
}

=======

/*

    Falsy Value : false , 0 , -0 , BigInt (0n) , null , undefined , NaN , "" 

    Truthy Value : Truth , "0" , 'false' , " " , [] , {} , function(){} <-- empty function 

*/

const email = "saurabh@outlook.com"

if(email){
    console.log("Obtained email")
}else{
    console.log("Email is not obtained");
}

const value = 0 

if(value){
    console.log("value is obtained")
}else{
    console.log("value is not obtained");
}


// How to check Array is empty ?

const array = []

if(array.length === 0 ){
    console.log("Array is Empty")
}else{
    console.log("Array is not Empty");
}

// How to check object is empty ?

const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Object is Empty");
}else{
    console.log("Object is not Empty");
}

>>>>>>> 6ab5b89af321beec9a204b34a22ee78742dfc66e
