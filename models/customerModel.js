const mongoose = require('mongoose');

//Customer Schema
const customerSchema=mongoose.Schema(
    {
        firstname: {type:String},
        lastname: {type:String},
        phone:{type:String},
        email:{type:String}
    }
)

//Define and Export
module.exports=mongoose.model('Customer_model',customerSchema);