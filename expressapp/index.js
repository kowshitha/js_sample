var expr = require("express")
var app=expr()
var studentRoutes=require("./studentrout")
app.use(expr.urlencoded({extended:true}))
app.use(expr.json())

app.set('view engine', 'pug');
app.set('views','./views');



app.get("/",function(req,res){
    res.sendFile(__dirname+"/homepage.html")

})
app.use("/student",studentRoutes)

app.listen(7080,()=>{console.log("the port is running on 7080")})

