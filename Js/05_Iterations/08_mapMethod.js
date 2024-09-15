<<<<<<< HEAD:Js/05_Iterations/08_mapMethod.js
/*
    Array.map() method 

    The map() method of array creates a new array populated with the result of calling function on every element in the calling function

    return value : new Array 

*/

const myArray = [10,20,30,40,50,60,70,80,90,]

const result = myArray.map( (values) =>{
    return values * 2
})

console.log(result);

console.log("********************************");

const result1 = myArray.map( function(values){
    return values + 10
})

console.log(result1);

console.log("********************************");

const result2 = myArray.map( (value) => value / 2);
console.log(result2);

console.log("********************************");

const result3 = myArray.map( (num) => Math.sqrt(num).toFixed(2));
console.log(result3);

console.log("********************************");

// using map reformate objects into array 

const anyArray = [
    {name: 'foo', age: 20},
    {name: 'bar', age:19},
    {name: 'baz', age:99},
    {name: 'boo', age:18}
]

console.log(anyArray.map( (key,value) => ({[key.name] : value})));

const properties = anyArray.map((key,values) => {return [key] ; values})
console.log(properties);

const name = anyArray.map((key,values) =>{
    return [key.name]
})
console.log(name);

console.log("********************************");

// Mapped array contains undefined

const number = [ 1,2,3,4,5,6,7,8,9,10,11,12]

const filturedNumbers = number.map( (item,index) =>{
    if(index < 5) return item
})

console.log(filturedNumbers);

console.log("********************************");

// Chaining 

const oneToTen = [1,2,3,4,5,6,7,8,9,10]

const chaining = oneToTen
                .map( (nums) => nums * 10)          // [10,20,30,40,50,60,70,80,90,100]  --> ye line excute hone ke bad ek new array ban gaya hai or is line ka output usme print ho chuka hai to ab vo chaining variable ko pass nahi honga bulki vo jayega dusre map method ke taraf..
                .map( (nums) => nums + 1)           // [11,21,31,41,51,61,71,.......]    --> uper vale ka result ab is chaining me pass hota hai ab ye method us new wale array per work karegi or yese hi aage pass hote jayege jab tak chaining hai tab tak 
                .map( (nums) => nums * 2)           // [22,42,62,82,102,.............]
                .filter( (nums) => nums <= 100)     // [22,42,62,82]

=======
/*
    Array.map() method 

    The map() method of array creates a new array populated with the result of calling function on every element in the calling function

    return value : new Array 

*/

const myArray = [10,20,30,40,50,60,70,80,90,]

const result = myArray.map( (values) =>{
    return values * 2
})

console.log(result);

console.log("********************************");

const result1 = myArray.map( function(values){
    return values + 10
})

console.log(result1);

console.log("********************************");

const result2 = myArray.map( (value) => value / 2);
console.log(result2);

console.log("********************************");

const result3 = myArray.map( (num) => Math.sqrt(num).toFixed(2));
console.log(result3);

console.log("********************************");

// using map reformate objects into array 

const anyArray = [
    {name: 'foo', age: 20},
    {name: 'bar', age:19},
    {name: 'baz', age:99},
    {name: 'boo', age:18}
]

console.log(anyArray.map( (key,value) => ({[key.name] : value})));

const properties = anyArray.map((key,values) => {return [key] ; values})
console.log(properties);

const name = anyArray.map((key,values) =>{
    return [key.name]
})
console.log(name);

console.log("********************************");

// Mapped array contains undefined

const number = [ 1,2,3,4,5,6,7,8,9,10,11,12]

const filturedNumbers = number.map( (item,index) =>{
    if(index < 5) return item
})

console.log(filturedNumbers);

console.log("********************************");

// Chaining 

const oneToTen = [1,2,3,4,5,6,7,8,9,10]

const chaining = oneToTen
                .map( (nums) => nums * 10)          // [10,20,30,40,50,60,70,80,90,100]  --> ye line excute hone ke bad ek new array ban gaya hai or is line ka output usme print ho chuka hai to ab vo chaining variable ko pass nahi honga bulki vo jayega dusre map method ke taraf..
                .map( (nums) => nums + 1)           // [11,21,31,41,51,61,71,.......]    --> uper vale ka result ab is chaining me pass hota hai ab ye method us new wale array per work karegi or yese hi aage pass hote jayege jab tak chaining hai tab tak 
                .map( (nums) => nums * 2)           // [22,42,62,82,102,.............]
                .filter( (nums) => nums <= 100)     // [22,42,62,82]

>>>>>>> 71c2669 (final commit):05_Iterations/08_mapMethod.js
console.log(chaining);