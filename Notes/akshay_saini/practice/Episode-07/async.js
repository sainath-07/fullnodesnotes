
const https = require("https");
const fs = require("fs");

console.log("hello world");

var a = 313213;
var b = 987652;

https.get("https://dummyjson.com/products/1", (req, res) => {
  console.log("API call....");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);


fs.readFile("./data.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error in readFile: ", error.message);
  }
  console.log("readFile: ", data);
});


function multiply(a,b){
    const result = a*b
    return result
}

var c = multiply(a,b)
console.log("value of C: ",c)