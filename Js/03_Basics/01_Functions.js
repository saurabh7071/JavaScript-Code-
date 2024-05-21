

function fun1(){
    console.log("Hello Everyone! Here is Saurabh");     // Function Scope / Function Definition 
}

// fun1  ---> Function Reference only 

console.log(fun1());
console.log(typeof fun1);

console.log("*******************************************");

function getOutput(num1,num2){
    console.log(num1+num2);
}

console.log(getOutput(2,5));

console.log("*******************************************");

function getOutput1(num1,num2){
    const result = num1+num2;
    return result;
    // console.log(`Addtion is : ${result}`);  ---> The code after writing return statement is useless 
}

// console.log("Result: ", getOutput1(2,9));

// const result = getOutput1(2,10);
// console.log(result);

const result = getOutput1(2,"9")    // 2 is also treated as string in this type of argument passing 
console.log("Result: ", result);    // 29 

console.log("*******************************************");

function takeName(usrname){
    console.log(`My name is - ${usrname}`);
}

takeName("Saurabh");

console.log("*******************************************");

function takeName1(username1){
    return `I'm ${username1}`
}

console.log(takeName1("Shreya"));
console.log(takeName1());   // if you not pass anything what will happens ? it will get 'undefined'

console.log("*******************************************");

function funtoos(user){
    // if(user == undefined){
        if(!user){
        console.log("Please enter a username!!");
        return 
    }
    return `Iam a new user and my name is ${user}`
}

console.log(funtoos());
console.log(funtoos("raju"));

console.log("*******************************************");
/*
    Rest operator and Spread Operator  


    ...num1 --> ye jo syntax hai ise hi rest and spread operator kaha jata hai but uske use case ke uper vo depend hote hai ki konsa rest or spread rahega
    to isse simply ye help hoti hai ki jab apne ko pata hi nahi ki kitne arguments pass ho rahe hai function ke 
    ander jaise ki shopping karte samay koi kitne products add kar raha hai ye pata nahi hota nnn to usi ko calculate
    karne me ye help karta hai nahi to hum ek hi paramenter se more than one arguments access nahi kar pate n.... 

    */

// to ye hai rest operator matlab ki function me multiple values kaise pass hoti hai 

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400));

// dusre way se 

function calculateCartPrice1(val1, val2, ...num2){ 
    return num2
}

console.log(calculateCartPrice1(100,200,300,400)); // --> isme kya huaa ki 100 and 200 ye val1 and val2 ko pass ho gaye or baki ke arguments ye num2 ko


console.log("*******************************************");

// Spread Operator - spread snippet expands iterable into individual elements 

function myData(firstName, lastName, companyName){
    return `${firstName} ${lastName} runs ${companyName}`
}

console.log(myData(...["Saurabh","Vaidya","Excellence"]));  // In this we use the spread operator to spread 
// ["Saurabh","Vaidya","Excellence"] across myData() parameters 

 
// In an Array Literals 
const amount = [200,400,100];
const totalAmount = [5000, ...amount, 10000];

console.log(totalAmount); 


// To Convert a String into individual array items 
const string = "SaurabhVaidya";

console.log([...string]);


// In function call 
const array = [1,2,3,4,5];
function total(a,b,c,d,e){
    return a+b+c+d+e
}

console.log(total(...array));


// Spread operators can’t expand object literal’s values
const myName1 = { firstName: "Oluwatobi", lastName: "Sofela" };
const bio1 = { ...myName1, website: "codesweetly.com" };

console.log(bio1);


// The spread operator does not clone identical properties
const myName = { firstName: "Tobi", lastName: "Sofela" };
const bio = { ...myName, firstName: "Oluwatobi", website: "codesweetly.com" };

console.log(bio);

console.log("*******************************************");


// Object pass into functions 

// let's make any object 
const obj2 = {
    name:"Saurabh",
    city:"Gondia",
    age:20
}

// now lets send this object in the function
function handleObj(anyNameForObj){
    console.log(`My name is ${anyNameForObj.name} and I'm from ${anyNameForObj.city}`);
}

handleObj(obj2);

// we can pass directly also without creating any extra object 
handleObj({
    name:"Raju",
    city:"Mumbai"
})


console.log("*******************************************");


// Arrays pass into function 

// Let's make an any array 
const myArray = [900,400,300,500]

// now let's send this array to the function 
function getSecondValue(anyNameForAccessingArray){
    return anyNameForAccessingArray[1]              // is line per dhyan dena hai 
}

console.log(getSecondValue(myArray));

// we can pass directly without creating any external array 
console.log(getSecondValue([200,120,140]));

function fun1(){
    console.log("Hello Everyone! Here is Saurabh");     // Function Scope / Function Definition 
}

// fun1  ---> Function Reference only 

console.log(fun1());
console.log(typeof fun1);

console.log("*******************************************");

function getOutput(num1,num2){
    console.log(num1+num2);
}

console.log(getOutput(2,5));

console.log("*******************************************");

function getOutput1(num1,num2){
    const result = num1+num2;
    return result;
    // console.log(`Addtion is : ${result}`);  ---> The code after writing return statement is useless 
}

// console.log("Result: ", getOutput1(2,9));

// const result = getOutput1(2,10);
// console.log(result);

const result = getOutput1(2,"9")    // 2 is also treated as string in this type of argument passing 
console.log("Result: ", result);    // 29 

console.log("*******************************************");

function takeName(usrname){
    console.log(`My name is - ${usrname}`);
}

takeName("Saurabh");

console.log("*******************************************");

function takeName1(username1){
    return `I'm ${username1}`
}

console.log(takeName1("Shreya"));
console.log(takeName1());   // if you not pass anything what will happens ? it will get 'undefined'

console.log("*******************************************");

function funtoos(user){
    // if(user == undefined){
        if(!user){
        console.log("Please enter a username!!");
        return 
    }
    return `Iam a new user and my name is ${user}`
}

console.log(funtoos());
console.log(funtoos("raju"));

console.log("*******************************************");
/*
    Rest operator and Spread Operator  


    ...num1 --> ye jo syntax hai ise hi rest and spread operator kaha jata hai but uske use case ke uper vo depend hote hai ki konsa rest or spread rahega
    to isse simply ye help hoti hai ki jab apne ko pata hi nahi ki kitne arguments pass ho rahe hai function ke 
    ander jaise ki shopping karte samay koi kitne products add kar raha hai ye pata nahi hota nnn to usi ko calculate
    karne me ye help karta hai nahi to hum ek hi paramenter se more than one arguments access nahi kar pate n.... 

    */

// to ye hai rest operator matlab ki function me multiple values kaise pass hoti hai 

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400));

// dusre way se 

function calculateCartPrice1(val1, val2, ...num2){ 
    return num2
}

console.log(calculateCartPrice1(100,200,300,400)); // --> isme kya huaa ki 100 and 200 ye val1 and val2 ko pass ho gaye or baki ke arguments ye num2 ko


console.log("*******************************************");

// Spread Operator - spread snippet expands iterable into individual elements 

function myData(firstName, lastName, companyName){
    return `${firstName} ${lastName} runs ${companyName}`
}

console.log(myData(...["Saurabh","Vaidya","Excellence"]));  // In this we use the spread operator to spread 
// ["Saurabh","Vaidya","Excellence"] across myData() parameters 

 
// In an Array Literals 
const amount = [200,400,100];
const totalAmount = [5000, ...amount, 10000];

console.log(totalAmount); 


// To Convert a String into individual array items 
const string = "SaurabhVaidya";

console.log([...string]);


// In function call 
const array = [1,2,3,4,5];
function total(a,b,c,d,e){
    return a+b+c+d+e
}

console.log(total(...array));


// Spread operators can’t expand object literal’s values
const myName1 = { firstName: "Oluwatobi", lastName: "Sofela" };
const bio1 = { ...myName1, website: "codesweetly.com" };

console.log(bio1);


// The spread operator does not clone identical properties
const myName = { firstName: "Tobi", lastName: "Sofela" };
const bio = { ...myName, firstName: "Oluwatobi", website: "codesweetly.com" };

console.log(bio);

console.log("*******************************************");


// Object pass into functions 

// let's make any object 
const obj2 = {
    name:"Saurabh",
    city:"Gondia",
    age:20
}

// now lets send this object in the function
function handleObj(anyNameForObj){
    console.log(`My name is ${anyNameForObj.name} and I'm from ${anyNameForObj.city}`);
}

handleObj(obj2);

// we can pass directly also without creating any extra object 
handleObj({
    name:"Raju",
    city:"Mumbai"
})


console.log("*******************************************");


// Arrays pass into function 

// Let's make an any array 
const myArray = [900,400,300,500]

// now let's send this array to the function 
function getSecondValue(anyNameForAccessingArray){
    return anyNameForAccessingArray[1]              // is line per dhyan dena hai 
}

console.log(getSecondValue(myArray));

// we can pass directly without creating any external array 
console.log(getSecondValue([200,120,140]));

