<<<<<<< HEAD

/*

    For Loop 

for (initialization; condition; afterthought/Increment/Decrement){
    // statement
}

*/

for(let steps = 0; steps <=5; steps++){
    console.log(steps);
}

console.log("********************************");


var star = " "
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        star += "*" + " "
    }
    console.log(star);
    star = " "
}

console.log("********************************");


let myArray = [1,2,3,4,5,6,7,8]
console.log(`myArray length is ${myArray.length}`);
for(let index = 0;index < myArray.length;index++){
    console.log(myArray[index]);
}

console.log("********************************");


for(let i=1;i<=10;i++){
    console.log(13 + ' * ' + i + " = " + 13*i);
}

console.log("********************************");

// break statement 
// Use the break statement to terminate a loop

for(let i = 1 ; i <= 10; i++){
    if(i == 5) {
        console.log("5 is alloted");
        break;
    }
    console.log(i);
}

console.log("********************************");

// Continue Statement 
// The continue statement can be used to restart a while, do-while, for, or label statement.
// When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. 

for (let i = 0; i < 10; i++) {
    if (i === 5) continue; // Skip the code inside this block when i
    console.log(i);
    
}

console.log("********************************");

=======

/*

    For Loop 

for (initialization; condition; afterthought/Increment/Decrement){
    // statement
}

*/

for(let steps = 0; steps <=5; steps++){
    console.log(steps);
}

console.log("********************************");


var star = " "
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        star += "*" + " "
    }
    console.log(star);
    star = " "
}

console.log("********************************");


let myArray = [1,2,3,4,5,6,7,8]
console.log(`myArray length is ${myArray.length}`);
for(let index = 0;index < myArray.length;index++){
    console.log(myArray[index]);
}

console.log("********************************");


for(let i=1;i<=10;i++){
    console.log(13 + ' * ' + i + " = " + 13*i);
}

console.log("********************************");

// break statement 
// Use the break statement to terminate a loop

for(let i = 1 ; i <= 10; i++){
    if(i == 5) {
        console.log("5 is alloted");
        break;
    }
    console.log(i);
}

console.log("********************************");

// Continue Statement 
// The continue statement can be used to restart a while, do-while, for, or label statement.
// When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. 

for (let i = 0; i < 10; i++) {
    if (i === 5) continue; // Skip the code inside this block when i
    console.log(i);
    
}

console.log("********************************");

>>>>>>> 6ab5b89af321beec9a204b34a22ee78742dfc66e
