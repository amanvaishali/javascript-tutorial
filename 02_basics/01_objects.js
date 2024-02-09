
const mySym = Symbol("key1")

const Jsuser = {
    name: "aman",
    age: "22",
     [mySym]: "mykey1",
    location: "delhi",
    email: "amanvaishali67@gmail.com",
    isLoginDays: false,
    lastLoginDays: ["maonday", "saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"]);
// console.log(Jsuser.location);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "amankumr66@gmail.com"
Object.freeze(Jsuser)
Jsuser.email =  "amanthakur67@gmail.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log(Hello js user);
}
console.log(Jsuser.greeting);