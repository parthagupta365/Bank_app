var mongoose = require('mongoose');

var bank_acctSchema = {
  account_num: { type: Number, required: true },
  user_name: {
    type: String,
    required: true
  },
  beneficiary: [{
    type: String
  }],
  currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      required: true
      
    },
   balance: {
       type: Number,
       required : true
   }
};

module.exports = new mongoose.Schema(bank_acctSchema);
module.exports.bank_acctSchema = bank_acctSchema;
