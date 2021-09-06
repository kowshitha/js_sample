var expr=require("express")
var app=expr()
var comments=[]
app.use(expr.urlencoded({extended:true}))
app.use(expr.json())
app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
    res.sendFile(__dirname+"/facebook.html")

})
app.post("/face",function(req,res){
    comments.push(req.body)
    res.render("face",{
        allcomment:comments
    }
    )
})

app.listen((7081),()=>{console.log("the port is running on 7081")})