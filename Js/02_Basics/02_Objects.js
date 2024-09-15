         
/*
            Objects
            
            An object is a collection of related data or functionality 
*/

// object literals 
const myObj = {
    name: 'John',
    age: 30,
    city: 'New York',
    email : 'saurabh@gmail.com',
    isLogedIn : false,
    lastLoginDays : ["Monday","Tuesday","Thrusday"],
    "Full Name" : "Saurabh Vaidya"   

};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.city);
console.log(myObj.email);
console.log(myObj.isLogedIn);
console.log(myObj.lastLoginDays[1]);
console.log(myObj["Full Name"]);

console.log("*********************************************");

// Alternate way to accees the properties of an object 

console.log(myObj["name"]);
console.log(myObj["email"]);
console.log(myObj["age"]);
console.log(myObj["isLogedIn"]);

console.log("*********************************************");

// Declaring symbol

const mySym = Symbol('key1');

const myObj1 = {
    [mySym] : "myKey1"
};

console.log(myObj1[mySym]);

console.log("*********************************************");

// Update values into Objects 

myObj.name = "Karan"
myObj.email = "karan56@gmail.com"
console.log(myObj);

console.log("*********************************************");

const newObj = {
    name : "kishor",
    age : 21
}
console.log(newObj);

// Freezing any object 

Object.freeze(newObj);

newObj.name = "kala"    // this changes are not propagate after freezing the newObj object 
console.log(newObj);    // therefore both the log's gives the same answer

console.log("*********************************************");

// Functipn declaration inside an object 

myObj.greeting = function(){
    console.log("Hello! JS lerners.");
    console.log(`hello! ${this.name}`);
}

console.log(myObj.greeting());

const vehicalObj = {
    name : "Raju",
    age : 90,
    email : "Saurabh@gmail.com",
    info : function(){
        console.log(`hey, I'm ${this.name} and my age is ${this.age}`);
    },

    details(){
        console.log(`My name is ${this.name}`);
    }
}

console.log(vehicalObj.info());
console.log(vehicalObj.details());

console.log("*************************************************************");

// Object as object properties 

const shapesObj = {
    name : "trinagle",
    shape : {
        size : "20cm",
        color: "red"
    },
    area : 50
};

console.log(shapesObj.shape);
console.log(shapesObj.shape.size);

console.log("*************************************************************");

// why use 'this' ? --> refere to current context inside the object 

const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);

      console.log(this);    // jo bhi current properties hoti hai vo show karta hai  
    },
};

console.log(person1.introduceSelf());



const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
};

  console.log(person2.introduceSelf());

  person2.name = "Kishor"
  console.log(person2.introduceSelf());


  /*
        In this case, person1.introduceSelf() outputs "Hi! I'm Chris."; 
        person2.introduceSelf() on the other hand outputs "Hi! I'm Deepti.", 
        even though the method's code is exactly the same in each case. 
        This isn't hugely useful when you are writing out object literals by hand, but 
        it will be essential when we start using constructors to create more than one object from a 
        single object definition, and that's the subject of the next section.
  */

console.log("*************************************************************");

const thisObj = {
    myName : "Saurabh",
    myFatherName : "Yogram",
    mySirname : "Vaidya",
    myfun(){
        console.log(`Hello`);
        console.log(this);
    }
}
console.log(thisObj.myfun());

console.log(this);  // print empty scope , but when we run it on broweser consol they shows window objects 


console.log("*************************************************************");


// Constrctor 

// when we have to creat more than one object, by using object literals are very inadequate 
// for that , we create their constrctor and update every object

function cretePerson(name){
    const obj = {};
    obj.name = name;
    obj.introduction = function(){
        console.log(`Hi, I'm ${this.name}`);
    };
    return obj;
}

const st1 = cretePerson("Saurabh");
console.log(st1.introduction());

const st2 = cretePerson("Ram");
console.log(st2.introduction());

const st3 = cretePerson("om");
console.log(st3.introduction());

// These work fine but is a long winded 
// A better way to create constructor is just a function called using the 'new' keyword

function cretePerson1(name){
    this.name = name;
    this.introduction = function(){
        console.log(`Hey, ${this.name} is here`);
    };
}

const A = new cretePerson1("Paki");
console.log(A.introduction());
const B = new cretePerson1("Pinky");
console.log(B.introduction());
const C = new cretePerson1("Ponga");
console.log(C.introduction());


console.log("*************************************************************");


// 'this' keyword does not work in any function it only for objects

function cretePerson5(){
    const name = "Rishabh"
    console.log(this);
    console.log(this.name);     // undefined 
}

cretePerson5();


// with arrow function 

const fun = () =>{
    const name = "Rakesh"
    console.log(this);          // empty scope 
    console.log(this.name);     // undefined   

}

fun()