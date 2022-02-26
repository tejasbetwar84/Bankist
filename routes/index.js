const express=require('express');
const router=express.Router();
const homecontroller=require('../controllers/index');

router.get('/',homecontroller.home);
router.use('/home',require('./sign_in'));
module.exports=router;