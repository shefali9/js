// singleton 

// object literals

//Object.create

const mySum = Symbol ("key1")

const JsUser = {
    name : "shefali",
    age : "25",
    [mySum]:"mykey1",
    "full name":"shefali shrivastava",
    email: "shefali@yopmail.com",
    location : "gwalior",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// //console.log(JsUser.full name);  //not possible

// console.log(JsUser[mySum]);

// console.log(JsUser.email="shefali@gmail.com")
// Object.freeze(JsUser)
// JsUser.email = "shefali@facebook.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Users")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js Users, ${this.name}`)
}
    console.log(JsUser.greeting());

    console.log(JsUser.greetingTwo());




