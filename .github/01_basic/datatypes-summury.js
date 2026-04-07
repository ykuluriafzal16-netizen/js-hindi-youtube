// premitive

// 7types: string ,number, boolean, null, undifined, symbol, bigint
const value = "Afzal"
const age = 14
const isLoggedIn = false
let outSideTemp = null
let college;



//console.table([value, age, isLoggedIn, outSideTemp, college])

const id = Symbol('123')
const anthorId = Symbol('123')
console.log(id == anthorId);

//refrence (non-Premitive)

//array objects and functions

const heors = ["Spiderman", "batman", "fireman"]
let myObj = {
    name : "Afzal",
    age : 18,
}

const myFunction = function () {
 console.log("Hello World");
}
 

console.log(typeof myObj)

//https://262.ecma-international.org/5.1/#sec-11.4.3

let userOne = {
    email : "Afzal@google.com",
    upi : "afzal@ybl"
}

let userTwo = userOne

userTwo.email= "shaikAfzal@google.com"

console.log(userOne.email);
console.log(userTwo.email);





