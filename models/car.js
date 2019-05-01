const mongoose= require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    cars: [{
        name: {type: String, required: true},
        model: {type: String, required: true},
        year: {type: String, required: true},
        image: {type: String} }]
    }, {timestamps: true})

const Car= mongoose.model('Car', carSchema)
module.exports= Car;