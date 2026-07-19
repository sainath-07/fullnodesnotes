// const https = require("https");
// const fs = require("fs");

// console.log("hello world");

// var a = 313213;
// var b = 987652;

// // Reading file synchronusly
// // it will block main thread
// // it will offload to libuv library(SUPER HERO)
// // V8 engine cannot perform file read operations, to perform file read operation V8 must have operating system access.
// const filedata=fs.readFileSync("./data.txt","utf8")
// console.log("read file sync: ",filedata)

// https.get("https://dummyjson.com/products/1", (req, res) => {
//   console.log("API call....");
// });

// setTimeout(() => {
//   console.log("setTimeout called after 5 seconds");
// }, 5000);

// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error("Error in readFile: ", error.message);
//   }
//   console.log("readFile: ", data);
// });


// function multiply(a,b){
//     const result = a*b
//     return result
// }

// var c = multiply(a,b)
// console.log("value of C: ",c)


const crypto = require("crypto")

console.log("hello world");

var a = 313213;
var b = 987652;


// crypto async
crypto.pbkdf2("password","salt",5000000,50,"sha512",(error)=>{
    console.log("key is generated")
})

// crypto sync
const data=crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("crypto synchronously: ",data)

function multiply(a,b){
    const result = a*b
    return result
}

var c = multiply(a,b)
console.log("value of C: ",c)