
// Class based syntax 

class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }    

    set email(value){
        this._email = value;
    }
    
    get password(){
        return `${this._password}tuChutiya`
    }

    set password(value){
        this._password = value;
    }
}

const client1 = new user("Saurabh@gmail.com","StrongPassword");
console.log(client1.email);
console.log(client1.password);

console.log("*************************************");

// Function based syntax 
function user1(email,password){
    this._email = email;
    this._password = password;
}

Object.defineProperty(user1.prototype,'email',{
    get: function(){
        return this._email.toUpperCase();
    },
    set: function(value){
        this._email = value;
    }
})

Object.defineProperty(user1.prototype,'password',{
    get: function(){
        return `${this._password}hatttt`
    },
    set: function(value){
        this._password = value
    }
})

const person = new user1("kishor@gmail.com","rytu8937")
console.log(person.email);
console.log(person.password);

console.log("********************************");

// Object based syntax 

const obj = {
    _email : 'shreya@gmail.com',
    _password : 'saurabh',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return `${this._password}mainahibataunga`
    },

    set password(value){
        this._password = value;
    }
}

const persone1 = Object.create(obj)
console.log(persone1.email);
console.log(persone1.password);