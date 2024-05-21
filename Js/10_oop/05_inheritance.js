
class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username);    // super keyword
        this.email = email;
        this.password = password;
    }

    addCource(){
        console.log(`A new cource was added by ${this.username}`);
    }    
}

const client1 = new teacher("Saurabh","saurabh@gmail.com,","2343343");
client1.addCource();
client1.logMe()

const client2 = new user("Rajnandan")
// client2.addCource() --> Does't have any access
client2.logMe()


console.log(client1 === client2);
console.log(client1 === teacher);
console.log(client1 instanceof teacher);
console.log(client1 instanceof user);