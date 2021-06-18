const Job = require('mongoose').model('Job');
const Contact = require('mongoose').model('Contact');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

module.exports = {
    index(request, response){
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
      }

      let perPage = 50;
      let page = Number(request.params.page);

      let query = {
        'active':true,
      }

      Job.find(query)
          .select('title jobSeqNo postedDate targetLevel location active primaryRecruiter_id')
          // .populate('hiringManager_id')
          .populate('primaryRecruiter_id')
          .skip((perPage * page) - perPage)
          .limit(perPage)
          .sort('-postedDate')
          .then(jobs => {
            Job.countDocuments(query).exec((err, count) => {
              if(err) return response.status(500).json(err);
              response.status(200).json({
                jobs : jobs,
                currentPage : Number(page),
                pages: Math.ceil(count / perPage),
                totalJobs: Number(count)
              })
            })
          })
          .catch(console.log);
    },
    show(request, response){
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
      }
        // console.log(request.params.id);
        Job.findById(request.params.id)
          // .select('title multi_location experience jobSeqNo postedDate targetLevel description jobQualifications jobResponsibilies')
          // .populate('hiringManager_id')
          .populate('primaryRecruiter_id')
          .then(job => {
            // console.log(job);
            response.json(job);
          })
          .catch(console.log)
        // response.json(true);
    },
    fetch(request, response){
      // filterTarget
      // sortTarget

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
      }
      
      let perPage = 50;
      let page = Number(request.body.currentPage);
      let sortTarget = String(request.body.sortTarget) || "-postedDate";
      // console.log(request.body.sorTaget)
      let query = {};

      if(Number(request.body.filterStatus) == 1){
        query.active = true;
      } else if (Number(request.body.filterStatus) == -1){
        query.active = false;
      }

      if(request.body.filterTarget != undefined){

        query.$or = [
          { title : {"$regex" : request.body.filterTarget, "$options" : "i"}},
          { jobSeqNo : {"$regex" : request.body.filterTarget, "$options" : "i"}},
          // { description : {"$regex" : request.body.filterTarget, "$options" : "i"}},
          // { jobQualifications : {"$regex": request.body.filterTarget, "$options" : "i"}},
          // { jobResponsibilies : {"$regex": request.body.filterTarget, "$options" : "i"}}
        ]
      }

      Job
        .find(query)
        .select('title jobSeqNo postedDate targetLevel location active primaryRecruiter_id')
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .sort(sortTarget)
        // .populate('hiringManager_id',)
        .populate('primaryRecruiter_id')
        .then(jobs => {
          Job.countDocuments(query).exec((err, count) => {
            if(err) return response.status(500).json(err);
            if(count==0){
              Contact.find({
                '$or': [
                  { 'name': {'$regex': request.body.filterTarget, '$options': 'i'}},
                  { 'email': { '$regex': request.body.filterTarget, '$options': 'i'}},
                ]
              })
              .select('_id')
              .then(contacts => {
                let contactList = contacts.map(element => new mongoose.Types.ObjectId(element._id))

                let contactQuery = {
                  '$or': [
                    // {'hiringManager_id': {'$in':contactList}},
                    {'primaryRecruiter_id': {'$in':contactList}},
                  ],
                }

                if(Number(request.body.filterStatus) == 1){
                  contactQuery.active = true;
                } else if (Number(request.body.filterStatus) == -1){
                  contactQuery.active = false;
                }

                Job.find(contactQuery)
                .select('title jobSeqNo postedDate targetLevel location active primaryRecruiter_id')
                .skip((perPage * page) - perPage)
                .limit(perPage)
                .sort(sortTarget)
                // .populate('hiringManager_id',)
                .populate('primaryRecruiter_id')
                .then(jobs => {
                  Job.countDocuments(contactQuery).exec((err, count) => {
                    if(err) return response.status(500).json(err);
                    response.status(200).json({
                      jobs: jobs,
                      currentPage: Number(page),
                      pages: Math.ceil(count/ perPage),
                      totalJobs: Number(count),
                    });
                  })
                })
                .catch(console.log)
              })
              .catch((error) => {
                response.status(500).json(error);
              });
            } else {
              response.status(200).json({
                jobs : jobs,
                currentPage : Number(page),
                pages: Math.ceil(count / perPage),
                totalJobs: Number(count)
              })
            }
          })
          // .catch(console.log)
        })
        .catch((error) => {
          response.status(500).json(error);
        })
    },
    create(request, response){},
    update(request, response){},
    destroy(request, response){},
}
