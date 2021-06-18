const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    title : String,
    jobSeqNo : String,
    postedDate : String,
    targetLevel: String,
    location: String,
    active: Boolean,
    hiringManager_id : {
      type : Schema.Types.ObjectId,
      ref : 'Contact',
    },
    primaryRecruiter_id : {
      type : Schema.Types.ObjectId,
      ref : 'Contact',
    },
    AdminContact_id : {
      type : Schema.Types.ObjectId,
      ref : 'Contact',
    },
},{
  collection: 'job_posting',
},{
    timestamps: true,
});

module.exports = mongoose.model('Job', jobSchema);
