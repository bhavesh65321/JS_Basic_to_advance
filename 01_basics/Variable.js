const accountId = 14444  // const variable once define we can't change it further
let accountEmail = "bhavesh@test.com"
var accountPassword = "12345" 
/*var keyword is not able to handle the scope, it means if we define same variable in another file then the value will change that's why js introduce let keyword */
/*prefer not use var, bcoz of issue in block and functional scope */                        
accountCity = "Jaipur"
let accountState;

//accountId = 2  // can't change the value of constant

console.log(accountId);

accountEmail="Bhavesh.g@test.com"
accountPassword="11111"
accountCity ="Channai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])