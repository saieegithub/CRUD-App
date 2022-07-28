 const userModel = require ("./../models/user");


// to create new user

exports.createUser =async (req,res) =>{
    try{
const users = await new userModel(req.body).save();
res.status(201).json(users);
    }catch(err){
     res.status(500).json({err});

    }
}

exports.getAllUser =async (req,res) =>{
    try{
const users = await userModel.find();
res.json(users);
    }catch(err){
     res.json({err});

    }
}

exports.getUser =async (req,res) =>{
    try{
const users = await userModel.find({_id:req.params.userID});
res.json(users);
    }catch(err){
     res.json({err});

    }
}

exports.deleteUser = (req,res) =>{

 userModel.findOneAndDelete({_id:req.params.userID},
    (err,data) =>{
        if(err){
            res.json({err});
        }else{
            res.json(data)
        }
    });

}
exports.updateUser = (req,res) =>{

    userModel.findOneAndUpdate({_id:req.params.userID},req.body,{new:true},
       (err,data) =>{
           if(err){
               res.json({err});
           }else{
               res.json(data)
           }
       });
   
   }