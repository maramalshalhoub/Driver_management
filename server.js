require('dotenv').config()
const express= require('express');
const app= express();
const port= process.env.PORT
const URL = process.env.URL

const Company = require('./models/company')
const Car = require('./models/car')
const Driver = require('./models/driver')
const ejs= require('ejs');
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const companyRoutes = require('./routes/company')
const driverRoutes = require('./routes/driver')
const carRoutes = require('./routes/car')

const cors = require('cors')
app.use(cors()) // add cors middleware

app.use(express.json()) //recieve json from req.body

mongoose.connect(URL, {useNewUrlParser : true})
.then(()=> console.log("mongdb running"),
(err) => console.log(err))


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use('/companys', companyRoutes);
app.use('/drivers', driverRoutes);
app.use('/cars', carRoutes);




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})