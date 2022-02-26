const express=require('express');

const router=express.Router();
const homecontroller=require('../controllers/sign_in');

router.post('/user'.homecontroller.user);
module.exports=router;
