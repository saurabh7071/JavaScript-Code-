
// using object 

const circle = {
    _radius : 1,

    get radius(){
        return this._radius;
    },

    set radius(value){
        if(value > 0){
            this._radius = value;
        }else{
            console.log("Radius must be positive");
        }
    },

    get area(){
        return Math.PI * this._radius * this._radius;
    },

    get cirumference(){
        return 2 * Math.PI * this._radius;
    }
};

console.log(circle.radius);
circle.radius = 5;
console.log(circle.area);
console.log(circle.cirumference);

console.log("********************************");

// using class 

class details{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get name(){
        return `My name is ${this._name}`
    }

    set name(value){
        this._name = value;
    }

    get password(){
        return `My password is ${this._password}8ufidj34234`
    }

    set password(value){
        this._password = value;
    }
}

const user = new details("saurabh","saurabh@gmail.com","345342");
console.log(user.name)
console.log(user.password)