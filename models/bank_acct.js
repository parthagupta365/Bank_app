var mongoose = require('mongoose');

// model for bank account
var bank_acctSchema = {
  account_num: { type: Number, required: true },
  username: {
      type: String,
      required: true,
      lowercase: true
    },
    passwordSalt: {
       type: String,
       required: true
    },
  beneficiary: [{
    username: {type: String},
    account_num: {type: Number}
  }],
  currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      required: true
      
    },
   balance: {
       type: Number,
       required : true,
       default:0
   }
};

module.exports = new mongoose.Schema(bank_acctSchema);
module.exports.bank_acctSchema = bank_acctSchema;
