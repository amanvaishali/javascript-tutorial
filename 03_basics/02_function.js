function numberValue(...num1){
return num1
}
//console.log(numberValue(200, 300, 400, 500));

const user = {
    username: "aman",
    prices: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

//handleObject(user)

handleObject({
    username: "rahul",
    prices:300
})


const myNewArray = [200, 500, 700, 900]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));