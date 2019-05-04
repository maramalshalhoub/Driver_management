const mongoose= require('mongoose')
const Schema = mongoose.Schema

const uniqueValidator = require('mongoose-unique-validator');

const companySchema = new Schema({
    name: {type: String, required: true, unique: true},
    logo:{type: String, required: true}, 
    address:{type: String, required: true}, 
    city:{type: String, required: true}, 
    telephone:{type: Number, required: true},
    cars:[{ type: Schema.Types.ObjectId, ref: 'Car'}],
    drivers: [{ type: Schema.Types.ObjectId, ref: 'Driver'}]
    },{timestamps: true,versionKey: false});

companySchema.plugin(uniqueValidator);

const Company = mongoose.model('Company', companySchema);
module.exports = Company;