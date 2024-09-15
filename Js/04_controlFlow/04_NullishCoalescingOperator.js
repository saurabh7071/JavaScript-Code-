<<<<<<< HEAD
/*
    ⁡⁣⁣⁢​‌‍‌Nullish coalescing Operator (??)​⁡
    
    The Nullish coalescing operator is a logical operator that returns its right hand side operand when its 
    left hand side operand is null or undefined and otherwice returns its left hand side operand

*/

const anyValue = null ?? 40
console.log(anyValue);

const anyValue1 = null ?? 20 ?? 40
console.log(anyValue1);

const anyValue2 = undefined ?? 50
console.log(anyValue2);

const anyValue3 = undefined ?? 40 ?? 20 
console.log(anyValue3);

const anyValue4 = undefined ?? null ?? -2
console.log(anyValue4);

const anyValue5 = 23 ?? "String"
console.log(anyValue5);

const anyValue6 = "String" ?? 23 
console.log(anyValue6);

const anyValue7 = false ?? " "
console.log(anyValue7);

const anyValue8 = [] ?? undefined
console.log(anyValue8);



/*

    ​‌‍‌⁡⁢⁣⁣Conditional Operator ⁡​

    Syntax :- Conditiona ? True Expresson : False Expresson

    The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
        a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
        followed by a colon (:), and finally the expression to execute if the condition is falsy. 
        This operator is frequently used as an alternative to an if...else statement.

*/

const value = 90
value >= 50 ? console.log("It is greater than 50") : console.log("It is less than 50");

const cost = 78
const result = cost > 100 ? "true" : "false";
console.log(result);

if(true){
    let a = 6 
    const b = 3
    var c = 7 
}


=======
/*
    ⁡⁣⁣⁢​‌‍‌Nullish coalescing Operator (??)​⁡
    
    The Nullish coalescing operator is a logical operator that returns its right hand side operand when its 
    left hand side operand is null or undefined and otherwice returns its left hand side operand

*/

const anyValue = null ?? 40
console.log(anyValue);

const anyValue1 = null ?? 20 ?? 40
console.log(anyValue1);

const anyValue2 = undefined ?? 50
console.log(anyValue2);

const anyValue3 = undefined ?? 40 ?? 20 
console.log(anyValue3);

const anyValue4 = undefined ?? null ?? -2
console.log(anyValue4);

const anyValue5 = 23 ?? "String"
console.log(anyValue5);

const anyValue6 = "String" ?? 23 
console.log(anyValue6);

const anyValue7 = false ?? " "
console.log(anyValue7);

const anyValue8 = [] ?? undefined
console.log(anyValue8);



/*

    ​‌‍‌⁡⁢⁣⁣Conditional Operator ⁡​

    Syntax :- Conditiona ? True Expresson : False Expresson

    The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
        a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
        followed by a colon (:), and finally the expression to execute if the condition is falsy. 
        This operator is frequently used as an alternative to an if...else statement.

*/

const value = 90
value >= 50 ? console.log("It is greater than 50") : console.log("It is less than 50");

const cost = 78
const result = cost > 100 ? "true" : "false";
console.log(result);

if(true){
    let a = 6 
    const b = 3
    var c = 7 
}


>>>>>>> 6ab5b89af321beec9a204b34a22ee78742dfc66e
