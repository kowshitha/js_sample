// var a=[12,23,45,56,77]
// var b=['praveen','priya','esh']
// var c=a.concat(b)
// console.log(c)


// var ar =[12,23,45,56,72]

// var br=['kowshi','pooji','ladoo']

// var cr=[]

// for (let index = 0; index < ar.length; index++) {
//     for (let index= 0; index < br.length; index++){
//         cr[index]=br[index]
//     }
//     cr[index] = ar[index] 
// }


// console.log(cr);

var h=require("http")
h.createServer((request,response)=>{
    console.log("request sent");
    response.setHeader('content-type','text/html')
    // response.write("<h1>welcome to javascript training</h1>");
    response.write("<h2>World</h2>");
    response.end();
}).listen(7082)


// console.log(__dirname)
// console.log(__filename)
// console.log(process.memoryUsage())

// console.log(process.cwd())