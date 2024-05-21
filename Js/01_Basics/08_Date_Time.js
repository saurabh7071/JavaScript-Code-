
// javascript date object represent a single moment in time in a platform independent formate 
/* Date objects encapsulate an integeral number that represents milliseconds since the midnight at the 
      beginning of january 1, 1970 UTC (the epoch)

*/

// Several ways to creat Date Object 

let today = new Date();     // Date() Constructor 
console.log(today);         // YYYY-MM-DDTHH:mm:ss.sssz
console.log(typeof today);  // object 

const birthday = new Date("January 17, 2002 03:26:00")      // may not work in all runtime   
const independenceDay = new Date("1947-08-15T03:24:00")     // This is standardized and will work reliably
const anyDate = new Date(1947, 11, 30)                      // the month is 0-indexed
const anyDate1 = new Date(1957, 10, 22, 2, 33, 0)           
const birthday5 = new Date(628021800000);                   // passing epoch timestamp

console.log("*******************************************");

// Formates of toString methods return values 

const date = new Date();
console.log(date.toString());      // Returns a string representation of a date. The format of the string depends on the locale
console.log(date.toISOString());   // Returns a date as a string value in ISO format.
console.log(date.toUTCString());   // Returns a date converted to a string using Universal Coordinated Time (UTC)
console.log(date.toJSON());        // Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.

console.log(date.toDateString());  // Returns a date as a string value.
console.log(date.toTimeString());  // Returns a time as a string value.

console.log(date.toLocaleString());     // Converts a date and time to a string by using the current or specified locale.
console.log(date.toLocaleDateString()); // Converts a date to a string by using the current or specified locale.
console.log(date.toLocaleTimeString()); // Converts a time to a string by using the current or specified locale.

console.log("********************************************");

// Self created date 

const newDate = new Date(2023, 11, 18)
console.log(newDate.toString()); // Converts a date to a string by using the

const newDate1 = new Date(2023, 11, 18, 4, 45, 15)
console.log(newDate1.toLocaleString());

const newDate2 = new Date("2023-11-18")     // YYYY-MM-DD
console.log(newDate2.toLocaleDateString());

console.log("**********************************************");

// Instance Methods 

const Timestamp = Date.now()    // Return the numeric value corresponding to the current time since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(Timestamp);

const newDate3 = new Date("2023-11-18")

console.log(newDate3.getDay());

console.log(newDate3.getDate());        // Gets the day-of-the-month, using local time
console.log(newDate3.getUTCDate());     // Gets the day-of-the-month, using Universal Coordinated Time (UTC).

console.log(newDate3.getMonth());          // The getMonth() method returns the month (from 0 to 11).
console.log(newDate3.getUTCMonth());       // Gets the month of a Date object using Universal Coordinated Time (UTC).

console.log(newDate3.getFullYear())        // The getFullYear() method returns the year (four digits).
console.log(newDate3.getUTCFullYear())

console.log(newDate3.getTimezoneOffset());  
console.log(Math.round(newDate3.getTimezoneOffset()));  

console.log(newDate3.getHours());           //  Gets the hours in a date, using local time.
console.log(newDate3.getUTCHours());        //   Gets the hours value in a Date object using Universal Coordinated Time (UTC)

console.log(newDate3.getMilliseconds());

console.log("**************************************************");

// To get Date, Month and Year or Time

const date2 = new Date("2000-11-17T16:45:30");
const [month, day, year] =[
    date2.getMonth(),
    date2.getDate(),
    date2.getFullYear(),
];  
console.log(month, day, year);  // [10 17 2000] as month are 0-indexed 

const [hours, minutes, seconds] = [
    date2.getHours(), 
    date2.getMinutes(), 
    date2.getSeconds()
];
console.log(hours, minutes, seconds);   // [16 45 30] 

console.log("***************************************************");

// Interpretation of two-digit years

let date3 = new Date(99,1);
console.log(date3.toString());

date3 = new Date(33,1);
console.log(date3.toString());

date3 = new Date("2/1/22")
console.log(date3.toString()); 

// date3 = new Date(00,1);
console.log(date3.toString()); 

// date3 = new Date(01,1);
console.log(date3.toString()); 

// Legacy Method always interprets two digit year values as relative to 1900

date3.setYear(98);
console.log(date3.toString()); 

date3.setYear(22);
console.log(date3.toString()); 

console.log("***************************************************");

// Elapsed time 

const start = Date.now();
// The event to time goes here 
const end = Date.now();
const elapsed = end - start;        // elapsed time in milliseconds 
console.log(elapsed.toString());

console.log("*************************************************");

// Get the number of Seconds since the ECMAScript Epoch 

const sec = Date.now() / 1000;
const sec1 = Math.floor(Date.now() / 1000);
console.log(sec);
console.log(sec1);

// In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return 
//     actually elapsed seconds. (That's why this code uses Math.floor(), and not Math.round()

console.log("**************************************************");

const datee = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("default", options));