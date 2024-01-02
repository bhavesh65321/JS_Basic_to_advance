"use strict"; // treat all JS code as newer version

//alert(3+3) // we are using node js(alert undefined in node js), not a browser (bcoz JS engine work in browser)

console.log(3
    +3)    //code readability should be high

//Documentation to follow
//https://tc39.es/ecma262/ (its defining the standard for js)
//alert MDN


//DataTypes
let name ="Hitesh"  //string
let age = 21 // int
let isLogging = false //boolean

//number => 2 to power 53 (range of int)
//bigint
//string=>""
//boolean => true/false
//null => standalone value and type in js (null is a representation of empty value)
//undefined => we haven't define the value 
//symbol => unique (to define uniqueness of any component)

//object

console.log(typeof "hitesh"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined


/* Alert =>
window.alert() instructs the browser to display a 
dialog with an optional message, and to wait until the user dismisses the dialog. 
its return undefined value, and its take string and object (convert object to string) as an input */
