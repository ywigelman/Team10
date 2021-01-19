const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true, 
      min: 6, 
      max: 225
    },
    firstName: {
      type: String,
      required: true, 
      min: 6 , 
      max: 225
    },
    lastName: {
      type: String,
      required: true, 
      min: 6 , 
      max: 225
    },
    password: {
      type: String,
      required: true, 
      max: 1024, 
      min: 6
    },
    phone: {
      type: Number,
      required: true, 
    },
    admin: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    collection: 'users',
  }
);
module.exports = mongoose.model('User', userSchema);