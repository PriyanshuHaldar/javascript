// Primitive data types( Jo value ko change nahi kiya ja sakta, bss copy value change hota h)
// 1. Number, 2. String, 3. Boolean, 4. Null, 5. Undefined, 6. Symbol, 7. BigInt


// Non-primitive data types( change by reference, original value can be changed)
// 1. Object, 2. Array, 3. Function



//   Stack (Primitive) , Heap (Non-primitive)


// String (Primitive)
let myName="priyanshuhaldar"
let myNewName=myName
myNewName="priyanshu"
console.log(myName)
console.log(myNewName)


// Object (Non-primitive)
let userOne={
    email:"priyanshu@example.com",
    age: 22
}
let userTwo=userOne
userTwo.email="newemail@example.com"

console.log(userOne.email)
console.log(userTwo.email)

