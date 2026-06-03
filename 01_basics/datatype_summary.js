// Primitive dataTypes

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//const bigNumber =3456776787899436786876



  








// Refernce Type (Non primitive)

// Arrays, Objects, Functions



const heros =["shaktiman","naagraj","doga"]
let myObj ={
    name: "shefali",
    age: "25"
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction)



//++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive),Heap (Non-primitive)

let myyoutubename ="shefalidotcom"

let anothername = myyoutubename
anothername ="xyz"

console.log(myyoutubename)
console.log(anothername)
 


let userone ={
    email : "usser@yopmil.com",
    upi: "user@ybl"
 }

 let userTwo = userone

 userTwo.email ="shefali2@yopmail.com"


 console.log(userone.email);
 
 console.log(userTwo.email);
 
 


