const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const fs = require('fs');
// const https = require('https');
// const http = require('http');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
// const sport = 8443;

const app = express();

// const privateKey = fs.readFileSync('sslcert/server.key', 'utf-8');
// const certificate = fs.readFileSync('sslcert/server.cert', 'utf-8');
// const credentials = {
//     key: privateKey,
//     cert: certificate,
// };

// const sessionConfig = {
//     saveUninitialized : true, //auto-creates cookie on visit
//     secret : 'SessionSecret',
//     resave : false, //does not resave if no changes are made
//     name: 'session',
//     rolling : true, //give cookie an expiration time, updates cookie expiration
//     cookie : {
//         secure : false,
//         httpOnly: false,
//         maxAge: 360000,
//     }
// };
app.use(cors());
// app.use(express.static('/dist/msft-jobs/'));
app.use(express.static('./dist/msft-jobs'))

app.use(parser.json({limit : '50mb', extended: true}));
app.use(parser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cookieParser('adfdfskjttketnrdtjkdsnlfsdkfdslkfdsdfsdf'));
// app.use(session(sessionConfig));
// app.use(express.static(path.resolve(__dirname, 'dist')));

require('./server/config/database');
require('./server/config/routes')(app);

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

// httpServer.listen(port, () => console.log(`Http Express server listening on port ${port}`));
// httpsServer.listen(sport, () => console.log(`Https Express server listening on port ${sport}`));

app.listen(port, () => { console.log(`Express server listening on port ${port}`)});