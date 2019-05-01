const mongoose= require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    name: {type: String, required: true},
    logo:{type: String, required: true}, 
    address:{type: String, required: true}, 
    city:{type: String, required: true}, 
    telephone:{type: Number, required: true},
    drivers : [{type: Schema.Types.ObjectId, ref: 'Driver'}],
    cars : [{type: Schema.Types.ObjectId, ref: 'Car'}]
    // drivers: [{
    //     name: {type: String, required: true},
    //     age: {type: String, required: true},
    //     image: {type: String}}],
    // cars: [{
    //     name: {type: String, required: true},
    //     model: {type: String, required: true},
    //     year: {type: String, required: true},
    //     image: {type: String} }]
    }, {timestamps: true})

const Company= mongoose.model('Company', companySchema)
module.exports= Company;