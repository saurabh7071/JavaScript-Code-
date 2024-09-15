
/*
    String : 

*/

const str1 = "Saurabh"
const str2 = "Vaidya"

// Outdated way 
console.log(str1 + str2 + 20);

// Modern Way --> String Interpolation          ` ` --> Backticks  
console.log(`My name is ${str1} and my sirname is ${str2}`);

// Another way to declare a string
const movieName = new String('Avatorrr')      // also check on console 
console.log(movieName);
console.log(typeof movieName);      //object 

console.log(movieName[0]);
console.log(movieName[5]);

console.log(movieName.__proto__);   // check it on console for result 

console.log("**********************************************************************");

// String's Methods/Functions 

console.log(movieName.length);
console.log(movieName.toUpperCase());   

console.log(movieName);                 // original value abhi bhi change nahi huii hai ..

console.log(movieName.toLowerCase()); 

// Charachter Access 

console.log(movieName.charAt(3));           // given index pr konsa character hai vo batata hai
console.log("Avator"[2]);               //  treat the string as an array-like object,  where individual characters correspond to a numerical index

// indexOf() and lastIndexOf() method 

console.log(movieName.indexOf('t'));        // Return the index number of the first occurance of search value or -1 if not found 
console.log(movieName.indexOf('r'));        
console.log(movieName.lastIndexOf('r'));    // Return the index number of the last occurance of search value or -1 if not found 

console.log(movieName.includes('tor'));     // true --> given char or string actuall string me hai ya nahi vo check karke boolean me ans deta hai 
console.log(movieName.includes('tpw'));     // false

console.log(movieName.substring(0,4));      // Avat --> 0 to 3 tak index ke charachter print karega 
console.log(movieName.substring(4));        // or --> 4th index ke bad ke charachter print karega 

// slice me negative value bhi de sakte hai 
console.log(movieName.slice(0,4));          // Avat
console.log(movieName.slice(-4,-1));        // ato
console.log(movieName.slice(-4,6));        // ator

const trimSring = "  Jaduuuu  "
console.log(trimSring); 
console.log(trimSring.trim()); // ye string ke dono ends ke white spaces ko remove karta hai 

// replace() and replaceAll() methods 

const replaceString = trimSring.replace('u','o');
console.log(replaceString);                             // jadouuu
console.log(trimSring.replaceAll('u','o'));             // jadoooo

// localCompare() method 

const stringName = "string"
const stringName1 = "STRING"

console.log(stringName.localeCompare(stringName1));                             // -1
console.log(stringName.localeCompare(stringName1,'en',{sensitivity:'base'}));   // 0 


// eval() method 

const numbers = "10 + 10"
console.log(eval(numbers));             // 20

const numbers1 = new String("10 + 10")
console.log(eval(numbers1));            // '10 + 10'

// valueOf() method 

console.log(eval(numbers1.valueOf()));  //  20 

// Static methods 
//  (1) String.fromCharCode() method 

console.log(String.fromCharCode(65,66,67));     // ABC
console.log(String.fromCharCode(0x2014));       //  -
console.log(String.fromCharCode(42));           // * 
console.log(String.fromCharCode(0xd83c, 0xdf03));
console.log(String.fromCharCode(55356, 57091));
console.log(String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07));

// (2) String.fromCodePoint() method 

console.log(String.fromCodePoint(42));          // * 
console.log(String.fromCodePoint(0x404));       // €

// endsWith() method 

console.log(stringName.endsWith('g'));          // true 
console.log(stringName.endsWith('t'));          // false

// repeat() method 

const mood = "happy!"
console.log(`I feel ${mood.repeat(3)}`);        // I feel happy! happy! happy!





