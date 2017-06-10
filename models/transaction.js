var mongoose = require('mongoose');

// model for transactions
var transactionSchema = {
  
  from_account_num: { type: Number, required: true },
  to_account_num: { type: Number, required: true },
  trans_type:{type: String, required: true},
  trans_date: { type: Date, default: Date.now },
  currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      required: true
      
    },
   amount: {
       type: Number,
       required : true
   }
};

module.exports = new mongoose.Schema(transactionSchema);
module.exports.transactionSchema = transactionSchema;
