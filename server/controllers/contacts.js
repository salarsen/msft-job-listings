const Contact = require('mongoose').model('Contact');
const csv = require('csv-express')

module.exports = {
    index(request, response){
        // console.log("contact index hit");
        Contact.find({ 'name': '', 'recruiter':true, 'hiringManager':false})
            .limit(250)
            .then(contacts => {
              // console.log(contacts)
              response.json(contacts)
            })
            .catch(console.log);
    },
    show(request, response){
      Contact.find({ $or : [{ 'name': ''},{'email': ''}]})
        .then(contacts => {
          // contacts.forEach()
          // console.log(contacts)
          var contactList = []
          contacts.forEach(contactString => {
            var temp = []
            temp.push(contactString._id)
            temp.push(contactString.name)
            temp.push(contactString.email)
            contactList.push(temp)
          })
          response.csv(contactList);
          // response.status(200);
        })
        .catch(console.log)
    },
    upload(request, response){
      let csvDataBuffer = JSON.stringify(request.body);
      let csvData = JSON.parse(csvDataBuffer).data;
      let csvDataString = csvData.toString("utf8");
      // console.log(csvDataString);
      contactList = csvDataString.split(/\n/);
      contactList.forEach(contactString => {
        contactString = contactString.replace(/['"]+/g, '');
        let temp = contactString.split(",");
        Contact.findByIdAndUpdate(temp[0], { name: temp[1], email: temp[2]})
          .then((contact) => {
            console.log(`${contact} updated`);
          })
          .catch(console.log)
      })
      response.status(200).json('success');
        // return csvtojson()
        //  .fromString(csvDataString)
        //  .then(json => {
        //    console.log(json)
        //    return res.status(201).json({csv:csvDataString, json:json})
        //   })
    },
    update(request, response){
      // console.log(request.body.contactList);
      var temp = request.body.contactList.slice(0,-1).split(';')
      // console.log(temp)

      temp.forEach(contactString=> {
        contactInfo = contactString.split(',');
        console.log(contactInfo);
        Contact.findByIdAndUpdate(contactInfo[0], { name: contactInfo[1], email: contactInfo[2]})
          .then((contact)=> {
            console.log(`${contact} updated`);
          })
          .catch(console.log)
      })
      response.json("True");

      // Contact.findByIdAndUpdate(request.params.id, request.body, { new : true })
      //    .then(function(contact){
      //       response.json(contact);
      //    })
      //    .catch(function(error){
      //       console.log(error);
      //       response.status(500).json(error);
      //    });

    },
    destroy(request, response){

    }
}
