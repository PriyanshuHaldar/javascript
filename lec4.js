
// conversion of string to number

let scope="33abc"
console.log( typeof scope)

let valueInNumber=Number(scope)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Boolean conversion

let isloggedIn="ella"

let booleanIloggedIn=Boolean(isloggedIn)
console.log( typeof booleanIloggedIn)

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber)

console.log( typeof stringNumber)


/*           OPERATIONS                        */


let value=3
let negValue=-value
console.log(negValue)

let str1="Hello"
let str2= " ella"
let str3=str1+str2
console.log(str3)

/*  Arithmetic operations

console.log(3+4)
console.log(2-1)
console.log(3*4)
console.log(4**2)
console.log(4/2)
console.log(4%2)

*/

/*

console.log(3 + 4)
console.log("3" + 4)
console.log(3 + "4")
console.log("3" + 4 + 2)
console.log(3 + 4 + "2")

*/

let gameCounter=100
let newgameCounter=gameCounter++;
console.log(newgameCounter,gameCounter)