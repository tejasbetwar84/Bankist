const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    first_name :{
        type : String,
        required:true,

    },
    last_name :{
        type:String,
        required: true,
    },
    email : {
        type : String,
        required:true,
        unique:true,
    },
    confirm_password : {
        type : String,
        required: true,
    },
    Transactions : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Transactions'
    }]
},{
    timestamps:true,
});

const User=mongoose.model('User',userSchema);
module.exports=User;

