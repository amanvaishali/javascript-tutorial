const tinderUser = {}

tinderUser.id = "1234abc",
tinderUser.name = "aman",
tinderUser.email = "aman@4746gmail.com",
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "amanvaishali67@gmail.com",
    fullname: {
        userfullname: {
            fristname: "aman",
            lastname: "thakur"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

const obj3 = Object.assign( {}, obj1, obj2)

//console.log(obj3);

//user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));




const course = {
    coursename: "ja in hindi",
    price: "999",
    courseInspare: "hitest"
}

const {price} = course
console.log(price);