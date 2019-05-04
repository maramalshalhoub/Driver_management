const mongoose= require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    drivers: [{
        name: {type: String, required: true},
        age: {type: String},
        image: {type: String}}],
    cars:[{ type: Schema.Types.ObjectId, ref: 'Car'}],
    company: { type: Schema.Types.ObjectId, ref: 'Company'}
    },{timestamps: true,versionKey: false});

const Driver= mongoose.model('Driver', driverSchema)
module.exports= Driver;
