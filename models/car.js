const mongoose= require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    cars: [{
        name: {type: String, required: true},
        model: {type: String, required: true},
        year: {type: String, required: true},
        image: {type: String} }],
    drivers: [{ type: Schema.Types.ObjectId, ref: 'Driver'}],
    company: { type: Schema.Types.ObjectId, ref: 'Company'}
    }, {timestamps: true,_id : false, versionKey: false});

const Car= mongoose.model('Car', carSchema)
module.exports= Car;
