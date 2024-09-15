<<<<<<< HEAD

/*
    Scope 

    1) Global Scope - variable declare outside of any function or block 
    2) Block Scope  - Introduced with 'let' and 'const' variable declared inside a block {}
    3) Function Scope - variable declare inside the function 

    let var1 = "Iam Global Scope variable"
    function fun1(){
        const var2 = "Iam Function Scope variable"
    }

    if(true){
        const var3 = "Iam Block Scope variable"
    }

*/

// Actuall problem with the 'var'

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); --> this is not acceptabe because the type of variable 'a' is let and it is declare inside the block so out of the block it is not accessible 
// console.log(b); --> Same for const also 
console.log(c);     // but c = 30 --> actuall me out of scope accessible nahi hona chahiye but variable 'c' ka type var hai or ye out of block accessible hota ha isiliye hum 'var' ko use nahi karte hai 


// Another way to understand about var is problematic 

var value = 90;
if(true){
     value = 20;
}

console.log(value); // actually me to isne 90 value leni thi but ye 20 value leta hai isiliye var use nahi karte hai 


console.log("********************************************************************");

const value1 = 70
let value2 = 20
if(true){
    const value1 = 900
    console.log(value1);    // 900

    value2 = 200
    console.log("Inner value : ",value2);    // 200
}

console.log(value1);    // 70
console.log("Outer value :", value2);    // 200     --> Ye dhyane dene layak hai 


console.log("********************************************************************");

// Nested Function Scope 

function one(){
    const product = "Guu"

    function two(){         // let's say it is the child of parent one() function so this two() child function can access the properties of parent one() function 
        const price = 750
        console.log(price);     // 750

        console.log(product);   // Guu
    }
    // console.log(price);  --> it is not accessible because it is out of scope .... but parent one() function can not accessible the properties of chile two() function 

    two()
}

one()

console.log("********************************************************************");

// Nested if statement 

if(true){
    const name = "Saurabh "
    if(name === "Saurabh "){
        const sirname = "Vaidya"
        console.log(name+sirname);
    }
    // console.log(sirname); --> out of scope 
}


console.log("********************************************************************");

// Hoisting 

// Hoisting is a javascript mechanism where variable and function declaration are moved to the top of their scope before code execution 

result1(9)      // Function hoisting 

function result1(num1){
    console.log(num1 + 1);          
}



/*

result2(15)     // --> Cannot access result2 before initialization 

const result2 = function (num2){
    log(num2 + 1);                  // -->
}

console.log("********************************************************************");

const aa = 5;
function result3(){
    console.log(aa);    --> Reference Error : Cannot access 'aa' before inialization 
                        
    const aa = 10;
}

result3()

=======

/*
    Scope 

    1) Global Scope - variable declare outside of any function or block 
    2) Block Scope  - Introduced with 'let' and 'const' variable declared inside a block {}
    3) Function Scope - variable declare inside the function 

    let var1 = "Iam Global Scope variable"
    function fun1(){
        const var2 = "Iam Function Scope variable"
    }

    if(true){
        const var3 = "Iam Block Scope variable"
    }

*/

// Actuall problem with the 'var'

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); --> this is not acceptabe because the type of variable 'a' is let and it is declare inside the block so out of the block it is not accessible 
// console.log(b); --> Same for const also 
console.log(c);     // but c = 30 --> actuall me out of scope accessible nahi hona chahiye but variable 'c' ka type var hai or ye out of block accessible hota ha isiliye hum 'var' ko use nahi karte hai 


// Another way to understand about var is problematic 

var value = 90;
if(true){
     value = 20;
}

console.log(value); // actually me to isne 90 value leni thi but ye 20 value leta hai isiliye var use nahi karte hai 


console.log("********************************************************************");

const value1 = 70
let value2 = 20
if(true){
    const value1 = 900
    console.log(value1);    // 900

    value2 = 200
    console.log("Inner value : ",value2);    // 200
}

console.log(value1);    // 70
console.log("Outer value :", value2);    // 200     --> Ye dhyane dene layak hai 


console.log("********************************************************************");

// Nested Function Scope 

function one(){
    const product = "Guu"

    function two(){         // let's say it is the child of parent one() function so this two() child function can access the properties of parent one() function 
        const price = 750
        console.log(price);     // 750

        console.log(product);   // Guu
    }
    // console.log(price);  --> it is not accessible because it is out of scope .... but parent one() function can not accessible the properties of chile two() function 

    two()
}

one()

console.log("********************************************************************");

// Nested if statement 

if(true){
    const name = "Saurabh "
    if(name === "Saurabh "){
        const sirname = "Vaidya"
        console.log(name+sirname);
    }
    // console.log(sirname); --> out of scope 
}


console.log("********************************************************************");

// Hoisting 

// Hoisting is a javascript mechanism where variable and function declaration are moved to the top of their scope before code execution 

result1(9)      // Function hoisting 

function result1(num1){
    console.log(num1 + 1);          
}



/*

result2(15)     // --> Cannot access result2 before initialization 

const result2 = function (num2){
    log(num2 + 1);                  // -->
}

console.log("********************************************************************");

const aa = 5;
function result3(){
    console.log(aa);    --> Reference Error : Cannot access 'aa' before inialization 
                        
    const aa = 10;
}

result3()

>>>>>>> 6ab5b89af321beec9a204b34a22ee78742dfc66e
*/