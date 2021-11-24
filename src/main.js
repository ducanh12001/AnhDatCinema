const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const route = require('./routes');

const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname,"resource/static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"resource/views"));

route(app);

app.listen(port);