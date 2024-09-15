
// Array : The array object, storing a collection of multiple items under a single variable name 

// Javascript arrays are resizable and can contain a mix of different data type 
// Javascript arrays are zero indexed 
// Javascript arrays copy operations create shallow copies 

console.log("******************* Create an Array *******************************");

// Array literal notation 

let vehicals = ["R15","Pulsar","HF","Shine","XBlade"]
console.log(vehicals, typeof vehicals);

// Array() Constructor 

const fruits = new Array("Apple","Banana","Cherry","Kiwi")
console.log(fruits, typeof fruits);

// using String.split() method to build the array from the string 

const fruit = "Apple,Banana".split(",")
console.log(fruit, typeof fruit);

console.log(Array.isArray("fruit"));     // false
 
console.log("******************* Create a String from an Array *******************************");

const vehicalsString = vehicals.join(",")
console.log(vehicalsString);
console.log(typeof vehicalsString);

console.log(Array.from("Saurabh"));

console.log("******************* Access an array item by its index **********************");

console.log(vehicals[0]);
console.log(vehicals[4]);
console.log(vehicals[5]);
console.log([vehicals.length]);     // 5
console.log([vehicals.length-1]);   // 4

console.log("******************* Find the index of an item  *******************************");

const indexNumber = vehicals.indexOf("HF")
console.log(indexNumber);

console.log(vehicals.indexOf("R15"));
console.log(vehicals.indexOf("BMW"));   // -1

console.log("******* Check if an array contains a certain item ***********");

const isContains = vehicals.includes("HF")
console.log(isContains);

console.log(vehicals.includes("BMW"));   // false 

console.log("******************* length property *******************************");

const lengthOfString = vehicals.length
console.log(lengthOfString);

console.log("******************* Append an item to an array *******************************");

const appendNewElement = vehicals.push("KTM")
console.log(vehicals);
console.log(appendNewElement);

const arr = ["a","b","c","d"]
const ar = ["e","f","g","h"]

arr.push(ar)
console.log(arr);
console.log(arr[4][2]);

console.log("******************* Remove the last item from an array *******************************");

console.log(vehicals.pop());
console.log(vehicals);

// pop() can only be used to remove the last item from an array 

console.log("******************* Remove an Multiple items from an array *******************************");

// splice() method to remove the last 3 items from an array 

let pens = ["pentonic","GoldX","Finegrip","Nataraj","Butterflow"]
const start = -3 
const removeLastThreeItems = pens.splice(start)
console.log(pens);
console.log(removeLastThreeItems);

// splice method to truncate the array down to just its first 2 items 

const newArray = ["Pintu","Chintu","Montu","Bantu","Santo"]
const start1 = 2
const removedItems = newArray.splice(start1)
console.log(newArray);
console.log(removedItems); 

console.log("******************* Remove the first item from an array *******************************");

const removeFirstItem = newArray.shift();
console.log(removeFirstItem);
console.log(newArray);

// Shift() can only be used to remove the first item from an array

console.log("******************* Remove multiple items from an array *******************************");

const lapi = ["HP","Lenevo","Dell","MSI","Mackbook","Realme"]
const begin = 2
const deleteCount = 3

const RemoveMultipleItems = lapi.splice(begin, deleteCount)
console.log(lapi);
console.log(RemoveMultipleItems);

console.log("******************* Add new first item to an array *******************************");

const addingNewItem = lapi.unshift("Asus")
console.log(lapi);
console.log(addingNewItem);

console.log("******************* Remove a single item by index *******************************");

const indexNumberofDeletedItem = lapi.indexOf("Asus");
const removeCount = 1

const removeSingleItem = lapi.splice(indexNumberofDeletedItem, removeCount)
console.log(lapi);
console.log(removeSingleItem);

console.log("******************* Replace multiple items in an array *******************************");

const start3 = -2
const deleteCount1 = 2
const ReplaceItems = lapi.splice(start3, deleteCount1,"Infinix","Sumsung")

console.log(lapi);
console.log(ReplaceItems);

console.log("******************* Iterate Over an array *******************************");

for(const fruitss of fruits) {
    console.log(fruitss);
}

console.log("******************* Merge Multiple arrays together *******************************");

const arr1 = ["book","pen","pencil","erasor","Scale"]
const arr2 = ["laptop","mouse","Charger","Headphone"]

const mergeArray = arr1.concat(arr2)
console.log(mergeArray);

// using spread syntax 
 
const allMergeArray = [...arr1, ...arr2]
console.log(allMergeArray);

console.log("******************* Copy an array *******************************");

// Create a copy using spread syntax
const copyOfarr1 = [...arr1]
console.log(copyOfarr1);

// Create a copy using the from() method 
const copyOfarr2 = Array.from(arr2)
console.log(copyOfarr2);

// Create a copy using the slice() method 
const copyOfarr = arr1.slice(arr1);
console.log(copyOfarr);

console.log("******************* Return a new array with all sub-array *********************");

const anything = [2,3,4,5,[6,7,8],9,[3,1,4,[5,9,6]]]
const everything = anything.flat(Infinity)
console.log(everything);

console.log("******* Set of elements to include in the new array object *********");

let mathMarks = 99
let scienceMarks = 98
let englishMarks = 88 
let historyMarks = 78

console.log(Array.of(mathMarks,scienceMarks,englishMarks,historyMarks));