const express=require('express');
const app=express();
const mongoose=require('mongoose');
const { response } = require("express");
const bodyParser=require('body-parser')
const cors=require("cors");
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration
mongoose.connect('mongodb+srv://AfterReact:AfterReact@cluster0.dllf1mj.mongodb.net/?retryWrites=true&w=majority');
const NoteSchema=mongoose.Schema({
    title:String,
    content:String
})
const Note=mongoose.model("Note",NoteSchema);
const DefNote=new Note({
    title:"this is the title",
    content:"This is the content"
})
// DefNote.save();

app.get("/api",function(req,res){
  
   Note.find(function(err,foundItems){

    console.log(foundItems)
    //    foundItems.map(item=>{
       
    //  console.log(item.name)
     
     
    // });

    // res.render("index",{newItems:foundItems})
    res.send(foundItems)
    })
});
   
// app.post("/api",function(req,res){
//     console.log("req rec");
//     // res.send("request received"+req.body.Item)
//     const newNote=new Note({
//         title:req.body.title,
//         content:req.body.content
//     })
//     newNote.save();
//     res.redirect("/api")
// })
   
const port=7000
app.listen(port,function(){

    console.log("server is running and up my darling 💕 the port"+port);
})