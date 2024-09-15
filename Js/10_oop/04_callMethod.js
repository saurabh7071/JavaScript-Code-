
function setUserName(username){
    this.username = username;
    console.log("Called!");
}

function details(username,email,password){

    setUserName.call(this ,username)   // method call 

    this.email = email;
    this.password = password;
}

const user = new details("Saurabh","Saurabh@gmail.com","ABH3435") // constructor function 
console.log(user);

