const fs = require("fs")
const https = require("https")

var a =2323
var b=34343


https.get("https://dummyjson.com/products/1",()=>{
console.log("API call")
})

setTimeout(()=>{
console.log("timeout function")
},5000)


fs.readFile("./path","utf-8",()=>{
console.log("file operation")
})


function multiply (x,y){
const result = x*y
return result
}

var c = multiply(a,b)
console.log(c)