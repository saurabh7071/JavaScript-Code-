
/*
    ***** Promises *****

    The Promises object represented the eventual completion or failure of an asunchronouse operation and its resulting value.

    Insted of immediately returning the final value , the asynchronous method return a promise to supply the value at some 
    point in the future. 

    A promise is in one of these states : 
    1) Pending - initial state, neither fulfilled nor rejected
    2) Fulfilled - Meaning, that the operation was completed successfully
    3) Rejected - Meaning, that the operation was rejected / failed

*/

const task = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(" ~ Async task 1");
        resolve();
    }, 2000)
})

task.then(function () {
    console.log("Async task 1 resolved!");
})

// **************************************

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(" ~ Async task 2 ");
        resolve();
    }, 2000)
}).then(function () {
    console.log("Async task 2 resolved!");
})

// **************************************

const newPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "John Doe", age: 45})
    },2000)
});

newPromise.then(function(user){
    console.log(user);
})

// console.log("***************************************");

const promiseFour = new Promise(function(resolve,reject){
    let error = true;
    setTimeout(function(){
        if(!error){
            resolve({username:"Virendra",password:"3455"})
        }else{
            reject(`Error: Something went Wrong!`)
        }
    },2000)  
})

promiseFour.then(function(user){
    console.log(user);
    return user.username    // ye return data hum dusre .then me lenge 
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){        // ye chalega hi chalega
    console.log("The promise is either resolve or rejected");
})

// console.log("********************************")

const promiseFive = new Promise(function(resolve,reject){
    const error = true;
    setTimeout(function(){
        if(!error){
            resolve({username:"Rajnandan",Password:"235433"});
        }else{
            reject(`Error: Some error is occure!`);
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// console.log("********************************");

// fetch() method 

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  // isko bhi convert hone me time lagta hai isiliye isko bhi await lagana padega 
        console.log(data);
    } catch (error) {
        console.log("Error : ", error);
    }
}

getAllUsers();

// ************************************************

fetch('https://api.github.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})