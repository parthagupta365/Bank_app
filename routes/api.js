var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var validator = require('express-validator');

router.use(validator());
router.use(session({
    secret : 'this is a secret',
saveUninitialized: false, resave: false}));
mongoose.connect('mongodb://localhost:27017/test');


var bank_acct =
    mongoose.model('bank_acct', require('../models/bank_acct'), 'bank_accounts');
  var transaction =
    mongoose.model('transaction', require('../models/transaction'), 'transactions');
  
  // function for gettiing balance
router.get('/balanceinfo', function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
    bank_acct.find({},{_id:0,balance:1},function(err,bal){
    if(err){
        return res.send(err);
    
    }
    res.json(bal);
});
});

// function for getting statements

router.get('/statement/:acct_num/:trans_from_dt/:trans_to_dt', function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
  transaction.find({from_account_num:req.params.acct_num,trans_date:{
        $gte: req.params.trans_from_dt,
        $lt: req.params.trans_to_dt
    }},{_id:0,trans_id:1,from_account_num:1,trans_type:1,trans_date:1,currency:1,amount:1},function(err,trans){
if(err){
        return res.send(err);
    
    }
    res.json(trans);    
})
// remove beneficiary details

router.put('/remove_beneficiary/:acct_num/:user_name',function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
bank_acct.update({account_num:acct_num,'beneficiary.username':req.params.user_name},
{ $unset: { 'beneficiary.username': "", 'beneficiary.account_num': "" }},function(err,task){
    if(err){
        res.send(err);
    
    }
    res.json(task);
});
});

// add beneficiary details
    router.put('/add_beneficiary/:acct_num/:user_name/:benacct_num',function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
bank_acct.update({account_num:acct_num},
{ $set: { 'beneficiary.username':req.params.user_name, 'beneficiary.account_num': req.params.benacct_num }},function(err,task){
    if(err){
        res.send(err);
    
    }
    res.json(task);
});
});
});


module.exports = router;
