const mongoose= require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    drivers: [{
        name: {type: String, required: true},
        age: {type: String, required: true},
        image: {type: String}}]
    }, {timestamps: true})

const Driver= mongoose.model('Driver', driverSchema)
module.exports= Driver;