const userModel = require("../model/userModel");


exports.create = async (req , res) => {
    console.log("outside try....")
    try {
        console.log("inside  try....")

        const userData = new userModel (req.body);
        const {email} = userData;
        
        const userExist = await userModel.findOne ({email});
        if (userExist) {
            return res.status(400).json ({ message: "user already exists."});
        }

        const savedUser = await userData.save();
        return res.status(200).json(savedUser);

    } catch (error) { 
        return res.status(500).json({error : "INTERNAL SERVER ERROR"}) 

    }
}

exports.fetch = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0 ) {
            return res.status (404).json ({ message : "user not found."});
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "INTERNAL SERVER ERROR." });
    }
};

exports.updates = async (req , res) =>{
    try {
        const id = req.params.id;
        const userExist = await userModel.findOne ({_id:id});
        if (!userExist) {
            return res.status (404).json ({ message : "user not found."});
        }
        const updateuser = await userModel.findByIdAndUpdate (id , req.body, {new:true})
        res.status(201).json(updateuser);

    }catch (error) {
        res.status (500).json ({error : "INTERNAL SERVER ERROR"});

    }
};

exports.deleteUser = async (req , res) => {
    try {
        const id = req.params.id;
        const userExist = await userModel.findById({_id: id });
        if (!userExist){
            return res.status(404).json ({message : "user not found "});
        }
        await userModel.findByIdAndDelete(id);
        res.status(201).json ({message :"Successfully deleted message"});
    }catch (error) {
        res.status (500).json ({error : "INTERNAL SERVER ERROR"});
    }
};

