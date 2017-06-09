var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var api = require('./routes/api');

var app = express();
var port = 3000;
const corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions))
//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// static folder

app.use(express.static(path.join(__dirname,'client')));

// body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use('/home',api);
app.listen(port,function(){
    console.log('listening on ' + port);
});
