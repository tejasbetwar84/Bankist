const express=require('express');

const router=express.Router();
const signIncontroller=require('../controllers/sign_in');
const loanController=require('../controllers/loan');
const addMoneycontroller=require('../controllers/addMoney');
const withdrawcontroller=require('../controllers/withdraw');

router.post('/user',signIncontroller.user);
router.get('/user',signIncontroller.user_)
router.post('/addMoney',addMoneycontroller.add);
router.post('/loan',loanController.loan);
router.post('/withdraw',withdrawcontroller.withdraw);

module.exports=router;

