const mongoose=require('mongoose');
const TransactionSchema=new mongoose.Schema({
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'User',
    },
    transactionType :{
         type: String,
         required : true,
    },
    amount :{
        type : 'Number',
        required:true,
    }
},{
    timestamps : true,
});

const Transactions=mongoose.model('Transactions',TransactionSchema);
module.exports=Transactions;