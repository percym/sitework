var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectedSchema= new Schema({

        ip:{type:String},
                region:{type:String},
                         org:{type:String},
                                loc:{type:String},
                                          country:{type:String},
                                                created:{type:Date, default:Date.now}
        });



            module.exports=mongoose.model('Collected',CollectedSchema);