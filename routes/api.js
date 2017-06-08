var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


mongoose.connect('mongodb://localhost:27017/test');


var Category =
    mongoose.model('Category', require('../models/category'), 'categories');
  var Product =
    mongoose.model('Product', require('../models/product'), 'products');
  var User =
    mongoose.model('User', require('../models/user'), 'users');

router.get('/api/product/:id',function(req,res,next){
    console.log('Parameter ',req.params.id);
    Product.find({'category._id':req.params.id})
    .populate({path:'category',select:'parent ancestors'})
    .exec(function(err,docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
        console.log('Inside get');
    });
});
router.get('/api/category',function(req,res,next){
    Category.find({},function(err,docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
        
    });
});
router.get('/api/productdetails/:id',function(req,res,next){
    console.log('Parameter ',req.params.id);
    
    Product.find({_id:mongoose.Types.ObjectId(req.params.id)},{_id:0})
    .populate({path:'category',select:'parent ancestors'})
    .exec(function(err,docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
        console.log(docs);
    });
});

module.exports = router;
