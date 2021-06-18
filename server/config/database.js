const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server','models');
const config = require('./config')

mongoose.Promise = global.Promise;

mongoose.connect(config.prod.database.host, {
  useNewUrlParser : true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.catch(console.log);
mongoose.connection.on('connected',() => console.log('connected to mongodb'));

// emits the sigint for windows - doesn't work currently
// console.log(process.platform)
if(process.platform === "win32"){
  require("readline")
     .createInterface({
        input : process.stdin,
        output : process.stdout,
     })
     .on("SIGINT", function(){
        process.emit("SIGINT");
     });
}

process.on('SIGINT',function(){
  mongoose.connection.close(function(){
     console.log(`Mongoose default connection closed`);
     process.exit(0);
  });
});

fs.readdirSync(modelsPath).forEach(file => {
    // if(file.indexOf('.js') > 0)
    // console.log(file)
    if(reg.test(file)){
        require(path.join(modelsPath,file))
    }
});
