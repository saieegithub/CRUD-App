const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs");

//create schema (format) for database

const userSchema = new mongoose.Schema({
   
    firstName:String,
    lastName:String,
    mobNumber:Number,
    emailId:String,
    password:String 
});

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10) 
        console.log(this.password);
    }
    next();
});



module.exports = mongoose.model("users",userSchema)
