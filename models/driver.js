const mongoose= require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    drivers: [{
        name: {type: String, required: true},
        age: {type: String},
        image: {type: String}}],
    cars: [{
            car:{ type: Schema.Types.ObjectId, ref: 'Car'},
            fuel:{type: String, enum: ['empty','half', 'full']},
            picked:{type: Date, default: Date.now },
            dropped: {type: Date }
        }],
    company: { type: Schema.Types.ObjectId, ref: 'Company'}
    },{timestamps: true,versionKey: false});

const Driver= mongoose.model('Driver', driverSchema)
module.exports= Driver;
