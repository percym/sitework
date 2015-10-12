var Collected= require('../models/Collected');
var config = require('../../config');
var secretKey=config.secretKey;

var jsonwebtoken = require('jsonwebtoken');


module.exports= function(app,express){

var api = express.Router();

api.post('/createDevice', function(req , res){
    var neCol = new Collected({
        ip:req.body.ip,
            region:req.body.region,
                org:req.body.org,
                     loc:req.body.loc ,
                        country:req.body.country

  });
            neCol.save(function (err){
                    if(err){

                res.send(err);
                return;
                }
            res.json({
            success:true,
            message:'Device has been logged',

            })

})
})


api.post('/createDevices', function(req , res, response){
    var neCol = new Collected({
        ip:response.ip,
            region:response.region,
                org:response.org,
                     loc:response.loc ,
                        country:response.country

  });
            neCol.save(function (err){
                    if(err){

                res.send(err);
                return;
                }
            res.json({


            success:true,
            message:'Device has been logged',

            })

})
})
api.get('/getDevices', function (req,res){

Collected.find({}, function(err, devices){


if(err) {
res.send(err)
return;
}

res.json(devices);

})





})

return api;
}