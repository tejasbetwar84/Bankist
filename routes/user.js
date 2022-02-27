const express=require('express');

const router=express.Router();
const signIncontroller=require('../controllers/sign_in');
const loanController=require('../controllers/loan');
const addMoneycontroller=require('../controllers/addMoney');

router.post('/user',signIncontroller.user);
router.post('/addMoney',addMoneycontroller.add);
router.post('/loan',loanController.loan);

module.exports=router;

