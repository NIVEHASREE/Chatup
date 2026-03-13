const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:""
    },
    about:{
        type:String,
        default:"Hello there! Im using ChatApp."
    },
    isOnline:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('User',UserSchema);
