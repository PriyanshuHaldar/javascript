// Strings

let name="priyanshu"
let repoCount=33

// console.log(name + repoCount)        // Concatenation (Old way of doing it)


console.log(`Hello ${name} your repo count is ${repoCount}`)   // Template literals (New way of doing it)

const newName= new String("priyanshu")    // another way of declaring string

console.log(newName.toUpperCase())
console.log(newName.charAt(2))
console.log(newName.indexOf("y"))

const newString=newName.substring(0,5)               //humane (newName) ko ek variable m store kiya h (newString)
console.log(newString) 

const anotherString=newName.slice(-8,4)            
console.log(anotherString)   

const newStringOne="    priyanshu-haldar-com   "
console.log(newStringOne)
console.log(newStringOne.trim()) 

const url="https://priyanhu.com/priyanshu%20haldar"
console.log(url.replace("%20","-"))    // replace method
console.log(url.includes("priyanshu"))

console.log(newStringOne.split("-"))    