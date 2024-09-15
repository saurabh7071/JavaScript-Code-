
// Static keyword 

// Anything declared as static belongs to the class itself and not need to create any object from that class

// we can access that static properties and methods by class itself without creating instance of that class 

class MathUtality{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtality.PI);
console.log(MathUtality.getDiameter(10));
console.log(MathUtality.getCircumference(10));
console.log(MathUtality.getArea(10));

console.log("****************************************************");

class users{
    static userCount = 0;

    constructor(username){
        this.username = username;
        users.userCount++;
    }

    sayHello(){
        console.log(`Hello, Iam ${this.username}`)
    }

    static getUserCount(){
        console.log(`Total users are : ${users.userCount}`);
    }
}

const user1 = new users("Gaurav")
const user2 = new users("Saurabh")
const user3 = new users("Rajnandan")

user1.sayHello();
user2.sayHello();
user3.sayHello();

users.getUserCount();

console.log("****************************************************");

// static keyword : Us method ko ya us object ko access hone se rok deta hai 

// mai kisi bar kisi method ka access sab ko nahi dena chahta hu tab mai static keyword use karunga 

class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `68790`
    }
}

const client = new user("Saurabh")
// console.log(client.createId());  --> static method ko access hi nahi kar kar sakte 


console.log("***********************************************");

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const client1 = new teacher("Saurabh","saurabh@gmail.com")
client1.logMe();
// console.log(client1.createId());  --> static lagane ke bad 'static' uske child ko bhi use method ko access nahi karne deta

