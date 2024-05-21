function multiplication(num){
    this.num = num
    return num * 5;
}

// kya ye possible hai , kya function bhi object ki tarah work karta hai...
multiplication.power = 4

console.log(" output : "+multiplication(5));
console.log(" is it object ? : "+multiplication.power); // js me har cheez object hoti hi hai. function, function bhi hai or object bhi hai....
// kya ye accessible hai ?
console.log(multiplication.prototype);
// this.num = num , jaisi cheeje is prototype ke empty {} curly braces me aati hai but vo dikhti nahi
// hame uska refrence lena padta hai dikhana ho to 


console.log("****************************************************8");

//  'this' & 'new' keyword 

// js 'new' keyword ke through constructor function leti hai 

function details(username,price){
    this.username = username;
    this.price = price;
}

details.prototype.increment = function(){
    this.price++
}

details.prototype.printMe = function(){
    console.log(`Price is : ${this.price}`);
}

const user1 = new details("Shakkar",40)
const user2 = new details("Salt",20)

user1.printMe();
user2.printMe();

/*

Here is what happens behind the scenes when the new keyword is used :

1) A new object is created : The new keyword initiates the creation of a new javascript object.

2) A prototype is linked : The newly created object gets linked to the prototype of the constructor function
                           This means that it has access to properties and methods defined on the constructor's prototype.
                           
3) The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. 
                                If no explicit return value is specified from the constructor. Js assumed this, the newly created object, to be the
                                intended return value. 

4) The new object is returned : After the constructor funtion has been called, if it doesn't return a non-primitive value 
                                (object, array, function etc.) the newly created object is returned.

*/