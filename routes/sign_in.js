const express=require('express');
const router=express.Router();
const signIncontroller=require('../controllers/sign_in');

router.post('/sign_in',signIncontroller.signIn);

module.exports=router;