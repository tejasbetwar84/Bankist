const User=require('../models/users');


module.exports.signInPage=function(req,res){
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

    module.exports.signIn_=function(req,res){
        return res.render('sign_in',{
            title : "Sign_In",
        })
    }

    module.exports.user=function(req,res){
        User.findOne({email:req.body.email},function(err,user){
        if(user){
        if(user.confirm_password==req.body.password){
            res.cookie("user_id",user._id);
           
            return res.render('user',{
                title : "User",
                user : user,
            
            })
        }else{
            return res.redirect('back');
        }
    }
    if(!user){
        return res.redirect('back');
    }
        })
    

    }

    
    