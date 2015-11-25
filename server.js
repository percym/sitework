var express = require('express');
var bodyParser= require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config= require('./config');

var http=require('http').Server(app);



var app = express();

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,\Authorisation');
    next();
    });

    mongoose.connect( config.database,function(err){

            if(err){
            console.log('DBerr');

            }else{
            console.log('DB Connected');
            }
    })

    app.use(bodyParser.urlencoded({extended:true}));
            app.use(bodyParser.json());
            app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


            app.use(morgan('dev'));

    var api = require('./app/routes/api')(app,express);
    app.use('/api',api);

    app.use(express.static(__dirname + '/public'));


app.get('*',function(req,res){
        res.sendFile(__dirname + '/public/app/views/index.html');
                 });


                 app.listen(config.port, function(err){

                     if(err){
                     console.log(err);
                     }else{
                     console.log('Listening on port' + config.port);
                     }
                 });
//some comment
