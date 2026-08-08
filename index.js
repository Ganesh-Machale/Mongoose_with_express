const express = require("express");
  const app = express();
  const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./Models/chat.js");

  app.set("views",path.join(__dirname,"views"));
   app.set("view engine","ejs");
   app.use(express.static(path.join(__dirname,"public")));
   app.use(express.urlencoded({extended: true}));
   
main()
.then((res)=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}
  
   app.get("/",(req,res)=>{
    res.send("Root is working ");
   });

   // Index Route
     app.get("/chats",async (req,res)=>{
      let chats = await Chat.find();
      console.log(chats);
      res.render("index.ejs",{chats}); 
     });

    //  New Route for creating the New chat
     app.get("/chats/new",(req,res)=>{
         res.render("new.ejs");
     })

     // Create Route with the help of Post request 
     app.post("/chats",(req,res)=>{
      let { from , to , msg } = req.body;
       let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date(),
       })

         newChat.save()
             .then((res)=>{
              console.log(res);
             })
             .catch((err)=>{
              console.log(err);
             });
  res.redirect("/chats");
         console.log("Chat was Sended :");
     });


  app.listen(8080,(req,res)=>{
    console.log("server is runing on port 8080");
  });

  // let chat1 = new Chat({
  //   from:"ganesh",
  //   to:"Aditya",
  //   msg:"We have to decide the topic for personal project ",
  //   created_at: new Date(),
  // })

  // chat1.save().then((res)=>{
  //   console.log(res);
  // }).catch((err)=>{
  //   console.log(err);
  // }); 
