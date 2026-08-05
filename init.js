const mongoose = require('mongoose');
const Chat = require("./Models/chat.js");

main()
.then((res)=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

 
  let allChats =[
    {
        from:"pranav",
        to:"Ananya",
        msg:"Why are You are coming to the collage ",
        created_at: new Date()
    },
    {
        from:"Aditya",
        to:"Bade",
        msg:"Bade ,Who are you ?  ",
        created_at: new Date()
    },
    {
        from:"Ganesh",
        to:"Vedant",
        msg:"where is your pillu",
        created_at: new Date()
    },
    {
        from:"vedant",
        to:"pillu",
        msg:"why you are not taking my calls ",
        created_at: new Date()
    },
  ];

    Chat.insertMany(allChats);
