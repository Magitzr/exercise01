const User = require('../models/UserModel.js');

// Create and Save a new new
exports.register = (req, res) => {
    // Validate request
   if(!req.body) {
        return res.status(400).send({
            message: "Please provide at least 1 user detail"
        });
    }
    if(!req.body.EmailId) {
        return res.status(400).send({
            message: "User Email Id is mandatory"
        });
    }
    if(!req.body.Password) {
        return res.status(400).send({
            message: "Password is mandatory"
        });
    }
    // Create a new User
    const userJSON = new User(req.body);
    //userJSON=req.body;

    // Save user in the database
    userJSON.save().then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while inserting a user"
        });
    });

};

exports.signin=(req, res)=>{
    User.findOne({EmailId:req.body.EmailId}).then(result=>{
        
        res.status(200).send({
            success:true,
            message:'User data available..'
        });
    }).catch(err=>{
        res.status(400).send({
            message:err.message
        });
    });
};

exports.findUserById=(req, res)=>{

};

exports.findAllUsers=(req, res)=>{

};

exports.updateUser=(req, res)=>{

};

exports.deleteUser=(req, res)=>{

};