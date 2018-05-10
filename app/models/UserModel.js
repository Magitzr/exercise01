var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    EmailId:{
        type:String,
        required:true,
        index: { unique: true }
    },
    PhoneNumber:{
        type:Number,
        requires:true,
        index: { unique: true }
    },
    Password:String,
    Role:String,
    AvatarImage:String

},{
    timestamps:true
});

module.exports=mongoose.model('User', userSchema);