var mongoose = require('mongoose');

var UserSchema = {
  username: {
      type: String,
      required: true,
      lowercase: true
    },
    passwordSalt: {
       type: String,
       required: true
    }
};

module.exports = new mongoose.Schema(UserSchema);
module.exports.UserSchema = UserSchema;