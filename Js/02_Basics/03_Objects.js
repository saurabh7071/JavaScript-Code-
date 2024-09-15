
// objects 

// way of Creating singalton objects 

const user = new Object()
console.log(typeof user);

console.log("*************************************");

const user1 = {}

user1.name = "Saurabh";
user1.email = "vaidyasaurabh@gmail.com";
user1.isLoggedIn = false;

console.log(user1);
console.log(user1.name);
console.log(user1.isLoggedIn);

console.log("*************************************");

// Objects into object

const user2 = {
    id:"23AB",
    fullName: {
        user2Name: {
            fistName: "Raju",
            lastName: "Pandey"
        }
    }
}

console.log(user2.fullName.user2Name);
console.log(user2.fullName.user2Name.fistName);
console.log(user2.fullName.user2Name.lastName);

console.log("*************************************");

// Combination of Objects
// Syantax 
//        const returnTarget = Object.assign(target,source); 

const a1 = { key1: 1, key2: 2 }
const a2 = { key3: 3, key4: 4 }

// first way to combine the objects 
// const z1 = {a1,a2}
// console.log(z1);

// Second way to combine the objects - Copy the values of all of the enumerable own properties from one or 
//                                      more source objects to a target object. Returns the target object.
// assign() method 
const z2 = Object.assign(a1,a2);  // here, a1 is a target object 
console.log(z2);

const z3 = Object.assign({},a1,a2); // here, {} is a target parameter -- it is better way 
console.log(z3);    

// Third way to combine the object - easy way 

const a3 = { key5: 5, key6:6};
const a4 = { key7: 7, key8:8};

const z4 = {...a3, ...a4};
console.log(z4);

console.log("*************************************");

// Accessing Objects in Array - When data comes from Database 

const array = [
    {
        id:54,
        email:"rj@gmail.com"
    },
    {
        id:55,
        email:"rjj@gmail.com"
    },
    {
        id:56,
        email:"rrj@gmail.com"
    },
    {
        id:57,
        email:"rrjj@gmail.com"
    }
]

console.log(array[0]);
console.log(array[0].id);
console.log(array[2].email);
console.log(array);

console.log("*************************************");

// Accessing only kyes and Values Separately 
// keys() and values() methods 

const b1 = {
    name: "Saurabh",
    email: "vaidyasaurabh@gmail.com",
    isLoggedIn: false,
}

console.log(Object.keys(b1));
console.log(Object.values(b1));

console.log("*************************************");

// entries() method - Returns an array of key/values of the enumerable properties of an object

console.log(Object.entries(b1));

console.log("*************************************");

// hasOwnProperty(v: PropertyKey): boolean 
// Determines whether an object has a property with the specified name.

console.log(b1.hasOwnProperty('isLoggedIn'));   // True 
console.log(b1.hasOwnProperty('isLogIn'));      // False

console.log("*************************************");

// Destructing of Objects 

const anyObj = {
    workerName:"Ramesh",
    city:"Gondia",
    State:"Maharashtra"
}

console.log(anyObj.workerName); // to access all properties inside the object we want to do such thing repetadely 

// but with the help of Destructuring we can overcome this problem 
// simply doing such a way 

const {workerName} = anyObj
console.log(workerName)     // we don't need to write obj.property name repetadely 

// if we want to give any other variable name so we can do like this 

const {workerName : labourName} = anyObj

// objects 

// way of Creating singalton objects 

const user = new Object()
console.log(typeof user);

console.log("*************************************");

const user1 = {}

user1.name = "Saurabh";
user1.email = "vaidyasaurabh@gmail.com";
user1.isLoggedIn = false;

console.log(user1);
console.log(user1.name);
console.log(user1.isLoggedIn);

console.log("*************************************");

// Objects into object

const user2 = {
    id:"23AB",
    fullName: {
        user2Name: {
            fistName: "Raju",
            lastName: "Pandey"
        }
    }
}

console.log(user2.fullName.user2Name);
console.log(user2.fullName.user2Name.fistName);
console.log(user2.fullName.user2Name.lastName);

console.log("*************************************");

// Combination of Objects
// Syantax 
//        const returnTarget = Object.assign(target,source); 

const a1 = { key1: 1, key2: 2 }
const a2 = { key3: 3, key4: 4 }

// first way to combine the objects 
// const z1 = {a1,a2}
// console.log(z1);

// Second way to combine the objects - Copy the values of all of the enumerable own properties from one or 
//                                      more source objects to a target object. Returns the target object.
// assign() method 
const z2 = Object.assign(a1,a2);  // here, a1 is a target object 
console.log(z2);

const z3 = Object.assign({},a1,a2); // here, {} is a target parameter -- it is better way 
console.log(z3);    

// Third way to combine the object - easy way 

const a3 = { key5: 5, key6:6};
const a4 = { key7: 7, key8:8};

const z4 = {...a3, ...a4};
console.log(z4);

console.log("*************************************");

// Accessing Objects in Array - When data comes from Database 

const array = [
    {
        id:54,
        email:"rj@gmail.com"
    },
    {
        id:55,
        email:"rjj@gmail.com"
    },
    {
        id:56,
        email:"rrj@gmail.com"
    },
    {
        id:57,
        email:"rrjj@gmail.com"
    }
]

console.log(array[0]);
console.log(array[0].id);
console.log(array[2].email);
console.log(array);

console.log("*************************************");

// Accessing only kyes and Values Separately 
// keys() and values() methods 

const b1 = {
    name: "Saurabh",
    email: "vaidyasaurabh@gmail.com",
    isLoggedIn: false,
}

console.log(Object.keys(b1));
console.log(Object.values(b1));

console.log("*************************************");

// entries() method - Returns an array of key/values of the enumerable properties of an object

console.log(Object.entries(b1));

console.log("*************************************");

// hasOwnProperty(v: PropertyKey): boolean 
// Determines whether an object has a property with the specified name.

console.log(b1.hasOwnProperty('isLoggedIn'));   // True 
console.log(b1.hasOwnProperty('isLogIn'));      // False

console.log("*************************************");

// Destructing of Objects 

const anyObj = {
    workerName:"Ramesh",
    city:"Gondia",
    State:"Maharashtra"
}

console.log(anyObj.workerName); // to access all properties inside the object we want to do such thing repetadely 

// but with the help of Destructuring we can overcome this problem 
// simply doing such a way 

const {workerName} = anyObj
console.log(workerName)     // we don't need to write obj.property name repetadely 

// if we want to give any other variable name so we can do like this 

const {workerName : labourName} = anyObj
console.log(labourName) ;