//  NUMS and MATH
const score= 100
console.log(score)

const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber= 123.456
console.log(otherNumber.toPrecision(5))

const numbers= 1000
console.log(numbers.toLocaleString("en-IN"))


// *******************************************//
// Maths
console.log(Math)
console.log(Math.abs(-7.5))
console.log(Math.round(7.6))
console.log(Math.floor(7.2))
console.log(Math.ceil(7.9))
console.log(Math.sqrt(64))
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor((Math.random()*10) + 1))


const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) +min)            // formula 

