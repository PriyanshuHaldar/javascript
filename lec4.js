
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
++gameCounter                      // pre increment (prefix)
let newgameCounter=gameCounter++;   // post increment (postfix)
console.log(newgameCounter,gameCounter)


/*  Comparison      */

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)


// ===    -> it checks the datatype also along with the value (same or not)

console.log(3 ==="3")   

//  Symbols are unique
const Id=Symbol("123")
const Id2=Symbol("123")
console.log(Id===Id2)