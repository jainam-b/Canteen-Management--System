const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.json({
        msg:"hii there"
    })
})

app.listen(3000);
