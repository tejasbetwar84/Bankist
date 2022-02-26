const User=require('../models/users');


module.exports.signIn=function(req,res){
     if(req.body.password=!req.body.confirm_password){
        return res.redirect('back');
     }
    User.findOne({email:req.body.email},function(err,user){
  
        if(!user){
            User.create(req.body,function(err,user){
                console.log(req.body);
                if(err){
                    console.log('Problem!');
                }
        
             })

        
            return res.render('sign_in',{
                title : "Sign_In",
            })
        }else{
            return res.redirect('back');
        }
        })
    };

    module.exports.user=function(req,res){
        User.findOne({email:req.body.email},function(err,user){
        
        if(user.confirm_password==req.body.password){
            return res.render('user',{
                title : "User",
                user : user,
            
            })
        }else{
            return res.redirect('back');
        }
        })
    }

    
    