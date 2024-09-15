
// * object.getOwnPropertyDescriptor() methode gives some hidden properties of the object like 
                    // writable , enumerable , configurable ....
// * Gets the own property descriptor of the specified object. An own property descriptor is one that is defined 
                    // directly on the object and is not inherited from the object's prototype.

// syntax : Object.getOwnPropertyDescriptor(object, property)

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discriptor);

console.log("**************************************************");

const anyObject = {
    name: "Lapi",
    price: "50k",
    isAvailable: true,

    greet: function () {
        console.log("Hello");
    }
}

console.log(anyObject);
// console.log(Object.getOwnPropertyDescriptor(anyObject));  --> undefined
console.log(Object.getOwnPropertyDescriptor(anyObject, "name"));
// yaha pe hame bolna padta hai ki kiski property hame chahiye , hame yaha name ki property chahiye isliye hame 'name' pass kiya 

// ****************************************************************************

// syntax : Object.defineProperty(anyObject, Property, {})

// Object.defineProperty(anyObject,'name',{
//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(anyObject,'name'));

// give the access to define the hidden property of the object

console.log("********************************");

for (let [key, value] of Object.entries(anyObject)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}

console.log("********************************");

const trialDetails = {
    day : "Saturday",
    time : "Evening",
    location: "Ground",
    isOpen : true,

    sport : function(){
        console.log("Criket day");
    }
}

for (const [key,value] of Object.entries(trialDetails)){
    console.log(`${key}: ${value}`);
}

console.log("********************************");

for (const [key,value] of Object.entries(trialDetails)){
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}


