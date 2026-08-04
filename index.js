const express = require("express");
  const app = express();
  const path = require("path");
const mongoose = require('mongoose');

  app.set("views",path.join(__dirname,"views"));
   app.set("view engine","ejs");
   
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

  app.listen(8080,(req,res)=>{
    console.log("server is runing on port 8080");
  });
