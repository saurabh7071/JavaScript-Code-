<<<<<<< HEAD

const fun = () =>{
      console.log("Hey Everyone! Now, We are learning Arrow Functions");
}

fun()

// ​‌‍‌⁡⁣⁢⁣Explicite Return⁡​ ⁡⁣⁢⁣-->⁡ ⁡⁣⁢⁣Return keyword lagana explicitely ⁡

const result = (a,b) =>{
    return a + b
}

console.log(result(20,50));

console.log("****************************************************************");

// ​‌‍‌‍⁡⁣⁢⁣Implicite Return --> bina return keyword ke ​⁡

// const result1 = (a,b) => a + b     OR
const result1 = (a,b) => (a + b)    //⁡ ⁡⁢⁣⁢⁡⁢⁢⁢curly braces me wrape kiya to return keyword likhna padega or agar parenthesis me wrape kiya to return keyword nahi likhna padega ⁡
console.log(result1(4,8));

console.log("****************************************************************");

//​‌‍‌ ⁡⁣⁢⁣​‌‍‌Return Object from arrow function ⁡ ​

const bio = () => ({username : "Saurabh"})

=======

const fun = () =>{
      console.log("Hey Everyone! Now, We are learning Arrow Functions");
}

fun()

// ​‌‍‌⁡⁣⁢⁣Explicite Return⁡​ ⁡⁣⁢⁣-->⁡ ⁡⁣⁢⁣Return keyword lagana explicitely ⁡

const result = (a,b) =>{
    return a + b
}

console.log(result(20,50));

console.log("****************************************************************");

// ​‌‍‌‍⁡⁣⁢⁣Implicite Return --> bina return keyword ke ​⁡

// const result1 = (a,b) => a + b     OR
const result1 = (a,b) => (a + b)    //⁡ ⁡⁢⁣⁢⁡⁢⁢⁢curly braces me wrape kiya to return keyword likhna padega or agar parenthesis me wrape kiya to return keyword nahi likhna padega ⁡
console.log(result1(4,8));

console.log("****************************************************************");

//​‌‍‌ ⁡⁣⁢⁣​‌‍‌Return Object from arrow function ⁡ ​

const bio = () => ({username : "Saurabh"})

>>>>>>> 6ab5b89af321beec9a204b34a22ee78742dfc66e
console.log(bio());