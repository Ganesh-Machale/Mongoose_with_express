const express = require("express");
  const app = express();
  const path = require("path");
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const Chat = require("./Models/chat.js");

  app.set("views",path.join(__dirname,"views"));
   app.set("view engine","ejs");
   app.use(express.static(path.join(__dirname,"public")));
   app.use(express.urlencoded({extended: true}));
   app.use(methodOverride("_method"));
   
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

  //  Edit Route to edit Message
       app.get("/chats/:id/edit", async (req,res)=>{
              let { id } = req.params;
              let chat = await Chat.findById(id);
                 res.render("edit.ejs",{chat});
       });

      //  Update Route for updating the msg in Db
         app.put("/chats/:id", async (req,res)=>{
          let { id } = req.params;
          let { msg : newmsg } = req.body;
            let updatedChat = await Chat.findByIdAndUpdate(id,{msg: newmsg},{runValidators:true},{new:true});
            console.log(updatedChat);
            res.redirect("/chats");
         })


  app.listen(8080,(req,res)=>{
    console.log("server is runing on port 8080");
  });
  
