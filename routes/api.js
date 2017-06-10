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
  
// creating bank account
router.post('/create_acct',function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
    var create_acct = req.body;

    if(!create_acct.account_num || !create_acct.username || !create_acct.passwordSalt ){
        res.status(400);
        res.json({"error":"bad data"});
    }
    else{
        var newbank_acct = new bank_acct({
          account_num:create_acct.account_num,
          username:create_acct.username,
          passwordSalt:create_acct.passwordSalt,
          beneficiary: create_acct.beneficiary,
          currency:create_acct.currency,
          balance:create_acct.balance
        });
        newbank_acct.save(function(err,acct){
         if(err){
        res.send(err);
    
    }   
    res.json(acct);
        })
    }
} );


  // function for gettiing balance
router.get('/balanceinfo/:acct_num', function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
    bank_acct.find({account_num:req.params.acct_num},{_id:0,currency:1,balance:1},function(err,bal){
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
});
// remove beneficiary details

router.put('/removebeneficiary/:acct_num/:user_name',function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
bank_acct.update({account_num:req.params.acct_num,'beneficiary.username':req.params.user_name},
{ $unset: { 'beneficiary.username': "", 'beneficiary.account_num': "" }},function(err,task){
    if(err){
        res.send(err);
    
    }
    res.json(task);
});
});

// add beneficiary details
    router.put('/addbeneficiary/:acct_num/:user_name/:benacct_num',function(req,res,next){
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

// transfer funds
router.post('/transfer',function(req,res,next){
    //if(!req.session.username){
      //  res.redirect('/login');
        //next();
    //}
    var transfer = req.body;

    if(!transfer.to_account_num || !transfer.amount ){
        res.status(400);
        res.json({"error":"bad data"});
    }
    else{
        var newtransfer = new transaction({
          
          from_account_num:transfer.from_account_num,
          to_account_num:transfer.to_account_num,
          trans_type:transfer.trans_type,
          trans_date:transfer.trans_date,
          currency:transfer.currency,
          amount:transfer.amount
        });
        newtransfer.save(function(err,trf){
         if(err){
        res.send(err);
    
    }   
    res.json(trf);
        })
    }
} );



module.exports = router;
