const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const masterRoutes = require('./server/masterRoutes');
const port = 4000;
const kyu ="```人◕‿‿◕人```"
const app = express();
const { address, sendgridAPI } = require('./config');
// Database connection information
const { dbUser, database } = require('./config').db;
const connectionString = `postgres://${dbUser}@localhost/${database}`;
const axios = require('axios');
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(sendgridAPI);
// connecting to our DB with massive
massive(connectionString).then(db => {
  app.set('db', db);
});

// required middlewares
app.use(json());
app.use(cors());
// app.use('/', express.static(__dirname + '/public'));

masterRoutes(app)

app.listen(port, function() {
    console.log('Server listening on port', port, kyu);
  })
  
