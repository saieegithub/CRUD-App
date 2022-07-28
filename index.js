const express = require ("express");
const app = express();
const conn = require("./db");
const cors = require ("cors");

conn.connection.on("connected",(err) =>{
    if(err){
        console.error(err);
    }else{
        console.log("connected to MongoDB");
    }
})


//to create get API
// app.get("/:userID",(req,res)=>{
//    const userNo = req.params.userID;

//     res.send(`Hello ${userNo}`);
// })
app.use(cors());
app.use(express.json());

app.use("/user",require("./routes/user"));




//lets create express server

app.listen(5000,()=>{
    console.log("server is started")
})


