const user = {
    username : "Saurabh",
    loginCount : 10,
    signedIn : true,

    getUserInfo : function(){
        console.log("All data are fetched");
        console.log(`Username : ${this.username}`);
        console.log("********************************");
        console.log(this); // pura current context hi de deta hai . 
    }

}

console.log(user.username)
console.log(user.getUserInfo());
console.log(this);  // abhi isme global context me kuch bhi nahi hai, yehi aap console ke ander karoge to aapko window global object milega. 


console.log("*************************************************************************");

const user2 ={
    username : "Rajesh",
    loginCount : 11,
    isLoggedIn : true, 

    getUserDetails : function(){
        console.log(`Username : ${this.username}`);
    }

    
}

const user3 = {
    username : "Ravi",
    loginCount : 23,
    isLoggedIn : false,

    getUserDetails : function(){
        console.log(`Username : ${this.username}`);
    }
}

console.log(user2.getUserDetails());
console.log(user3.getUserDetails());

console.log("********************************************");

//​‌‍‌⁡⁣⁣⁢ 𝗖𝗼𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗼𝗿 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 ⁡​

// jaha bhi ​‌‍‌'⁡⁣⁢⁢new'​⁡ ⁡⁣⁣⁢keyword aata hai vo constructor function hai

// const promisOne = new Promise()
// const date = new Date()

// new keyword : new context banane ke liye kam me aata hai 

function userFunction(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome brooo ${this.username}`);
    }

    return this // ye nahi likha to bhi chalega, ye default bhi return hota hi hai
}

const userDetails =  new userFunction("Ramesh",66,true)
const userDetails1 = new userFunction("Vikky",33,false)
console.log(userDetails);
console.log(userDetails1);

console.log(userDetails.constructor);   // constructor property khud ke bare me reference deta hai 

// yaha agar bina new keyword ko use kiye aap userDetails ko print karne jaoge to userDetails1 ki value overwrite ho jayegi 
// is problem ko remove karne ke liye hum constructor functin ka use karte hai jo hame harbar new context provide karta hai.


console.log("**************************************************************");

// instanceof Method 

function shapes(size,count){
    this.size = size;
    this.count= count;
}

const triangle = new shapes('big',2);

console.log(triangle instanceof shapes);

console.log(triangle instanceof Object);