const User=require('../models/users');
const Transactions=require('../models/transactions');
module.exports.loan=function(req,res){
    User.findById(req.cookies.user_id,function(err,user){
      Transactions.create({
          User : user,
          transactionType : "deposit",
          amount : req.body.amount,
      },function(err,transaction){
          if(err){
              console.log('problem !');
          }
          
          user.Transactions.push(transaction);
          user.save();
         
          return res.redirect('back');
      })
    })
}
