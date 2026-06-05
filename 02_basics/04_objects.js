//singleton Object const tinderUser = new Object()   
// non singleton object

const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Shefali"


console.log(tinderUser);

const regularUser = {
    email: "shefali@yopmail.com",
    fullname :{
        userFullname: {
            firstname : "shefali",
            lastname : "shrivastava"
        }
    }
}
console.log(regularUser.fullname);


const obj1 ={
    1: "a",
    2: "b"
}
const obj2 ={
    1: "a",
    2: "b"
}
const obj4 ={
    1: "a",
    2: "b"
}

//const obj3 = Object.assign({},obj1 , obj2,obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users =[
    {
        id:1,
        email: "shefali@yopmail.com"
    },
     {
        id:2,
        email: "shefali@yopmail.com"
    }, {
        id:3,
        email: "shefali@yopmail.com"
    }
]
users[1].email
//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));










