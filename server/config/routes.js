const jobController = require('../controllers/jobs');
const contactController = require('../controllers/contacts');
const path = require('path')
const { check } = require('express-validator');

module.exports = function(app){
    app
        .get('/api/jobs/:page', [
            check('page').isNumeric().trim().escape()
            ], jobController.index)
        .post('/api/jobs', [
            check('currentPage').isNumeric().trim().escape(),
            check('sortTarget').trim().escape(),
            check('filterStatus').isNumeric().trim().escape(),
            check('filterTarget').trim().escape()
            ], jobController.fetch)
        .get('/api/jobs/detail/:id/', [
            check('id').trim().escape()
            ], jobController.show)
        // .get('/api/contacts',[],contactController.index)
        .get('/*',function(request, response){
            response.sendFile(path.resolve(__dirname,'../../dist/msft-jobs/index.html'));
        })

        
        // .use((req, res, next) => {
        //   res.append('Access-Control-Allow-Origin', ['*']);
        //   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        //   res.append('Access-Control-Allow-Headers', 'Content-Type');
        //   next();
        // })
        //.get('/api/jobs/:page/:filter',jobController.pages)
        // // .get('/api/jobs', jobController.index)
        // .get('/api/contacts', contactController.index)
        // .get('/api/contacts',contactController.index)
        // .post('/api/contacts',contactController.update)
        // .post('/api/contacts/upload',contactController.upload)
        // .all('*',function(request, response){
        //   // console.log(request.params[0]);
        //   console.log(path.resolve('../../dist/msft-jobs', request.params[0]))
        //   response.sendFile(path.resolve(__dirname,'../../dist/msft-jobs', request.params[0]));
        // });
};


        // .post('/api/books', jobController.create)
        // .get('/jobs/:job_id', jobController.show)
        // .put('/api/books/:book_id', jobController.update)
        // .delete('/api/books/:book_id', jobController.destroy)
