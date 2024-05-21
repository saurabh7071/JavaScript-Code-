<<<<<<< HEAD

/*
    While loop 

    A while statement executes its statements as long as a specified condition evaluates to true.

    Syntax : 
            // initialization
            while(Conditon){
                // statements
                // increment/decrement 
            }
*/

let n = 0
while(n < 10){
    console.log(n);
    n+=2;
}

console.log("********************************");

let arr = ["Saurabh", "Rakesh", "Ramu", "Rajnandan", "Rajesh", "Raj"]
let i=0
while(i < arr.length){
    console.log(arr[i]);
    i++
}

console.log("********************************");

let arr1 = ["Saurabh", "Rakesh", "Ramu", "Rajnandan", "Rajesh", "Raj"]
let j=0
while(j < arr1.length){
    if(arr1[j] === "Rajnandan"){
        console.log("Stop...");
        break
    }
    console.log(arr[j]);
    j++
}

console.log("********************************");

let cities = ["Yavatmal", "Gondia", "Nagpur", "Wardha", "Nanded", "Pune"]
let k=0
while(k < cities.length){
    if(cities[k] === "Nagpur"){
        console.log(".");
        k++
        continue
    }
    console.log(cities[k]);
    k++;
}

console.log("********************************");

let p=0,q=0,st=" ";
while(p<5){
    while(q<=p){
        st = st + "*" + " "
        console.log(st);
        q++
    }
    p++
}
=======

/*
    While loop 

    A while statement executes its statements as long as a specified condition evaluates to true.

    Syntax : 
            // initialization
            while(Conditon){
                // statements
                // increment/decrement 
            }
*/

let n = 0
while(n < 10){
    console.log(n);
    n+=2;
}

console.log("********************************");

let arr = ["Saurabh", "Rakesh", "Ramu", "Rajnandan", "Rajesh", "Raj"]
let i=0
while(i < arr.length){
    console.log(arr[i]);
    i++
}

console.log("********************************");

let arr1 = ["Saurabh", "Rakesh", "Ramu", "Rajnandan", "Rajesh", "Raj"]
let j=0
while(j < arr1.length){
    if(arr1[j] === "Rajnandan"){
        console.log("Stop...");
        break
    }
    console.log(arr[j]);
    j++
}

console.log("********************************");

let cities = ["Yavatmal", "Gondia", "Nagpur", "Wardha", "Nanded", "Pune"]
let k=0
while(k < cities.length){
    if(cities[k] === "Nagpur"){
        console.log(".");
        k++
        continue
    }
    console.log(cities[k]);
    k++;
}

console.log("********************************");

let p=0,q=0,st=" ";
while(p<5){
    while(q<=p){
        st = st + "*" + " "
        console.log(st);
        q++
    }
    p++
}
>>>>>>> 6ab5b89af321beec9a204b34a22ee78742dfc66e
