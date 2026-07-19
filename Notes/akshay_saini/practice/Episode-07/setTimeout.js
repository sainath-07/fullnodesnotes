const https = require("https");
const fs = require("fs");
console.log("hello world");

var a = 313213;
var b = 987652;

// Even though settimeout is 0 seconds,it will execute async callback only when callstack is empty.
setTimeout(()=>{
    console.log("setTimeout: Zero  seconds")
},0)

https.get("https://dummyjson.com/products/1", (req, res) => {
  console.log("API call....");
});


fs.readFile("./data.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error in readFile: ", error.message);
  }
  console.log("readFile: ", data);
});


setTimeout(()=>{
    console.log("setTimeout: 5  seconds")
},5000)


function multiply(a,b){
    const result = a*b
    return result
}

var c = multiply(a,b)
console.log("value of C: ",c)