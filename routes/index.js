const express=require('express');
const router=express.Router();
const homecontroller=require('../controllers/index');
const loanController=require('../controllers/loan');

router.get('/',homecontroller.home);
router.use('/home',require('./sign_in'));
router.use('/sign-in',require('./user'));

module.exports=router;

