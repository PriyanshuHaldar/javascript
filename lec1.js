// console.log("Hello");
const accountId=123411
let accountEmail="ph@gmail.com"
var accountPassword="11222" //now we dont use  var keyword to declare a variable because of issue in block scope (i.e {}) and functional scope
acountCity="New York"


let accountState;   //output will be 'undefined'



// accountId=2211  // not posible to reassign a constant variable
accountEmail="hp@gmail.com"
accountPassword="112233"
acountCity="Los Angeles"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,acountCity, accountState]);