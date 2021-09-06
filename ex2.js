// var fs=require("fs")
// var f=fs.readFileSync("file.txt")
// console.log(f.toString().split('\r\n'))

var fs=require("fs")
fs.readFile("file.txt",function(err,data){
    console.log(data.toString())
})
console.log("execute me first because am not getting blocked")

var fs1=require("fs")
var data1=fs1.readFileSync("f2.txt")
console.log(data1.toString())
console.log("execute me at the last because am  getting blocked")