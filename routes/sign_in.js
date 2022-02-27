const express=require('express');
const router=express.Router();
const signIncontroller=require('../controllers/sign_in');


router.post('/sign_in',signIncontroller.signInPage);
router.get('/sign_in',signIncontroller.signIn_);



module.exports=router;