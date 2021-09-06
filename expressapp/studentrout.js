var expr=require('express')
var router=expr.Router()
var student=[]

router.get("/studentreg",function(req,res){
    res.sendFile(__dirname+"/register.html")

})
router.get("/studentlist",function(req,res){
    res.render("student",{
        allstu:student
    })
})
router.post("/regis",function(req,res){
    console.log("req message body::",req.body)
    student.push(req.body)
    res.send("student registration successfull")
})

module.exports=router