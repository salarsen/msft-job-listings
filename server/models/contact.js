const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  name : {
    type : String,
  },
  email : {
    type : String,
  },
},{
  collection: 'contact_info',
},{
  timestamps : true,
});

module.exports = mongoose.model('Contact',contactSchema)
