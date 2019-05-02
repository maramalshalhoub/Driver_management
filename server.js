require('dotenv').config()
const express= require('express');
const app= express();
const port= process.env.PORT
const Company = require('./models/company')
const Car = require('./models/car')
const Driver = require('./models/driver')
const ejs= require('ejs');
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const companyRoutes = require('./routes/company')
const driverRoutes = require('./routes/driver')
const carRoutes = require('./routes/car')
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use('/companys', companyRoutes);
app.use('/drivers', driverRoutes);
app.use('/cars', carRoutes);

mongoose.connect('mongodb://localhost:27017/companys', {useNewUrlParser: true}).then(() => {
    console.log('mongodb running');
}, (error) => console.log(error))

//Car INDEX
app.get('/cars', (req, res) => {
    Car.find()
    .then((cars)=>{
      res.render('index', { cars })
    })
    .catch(err => console.log(err))
  })

//Car NEW
app.get('/cars/new', (req, res) => {
    Car.find()
      .then(cars => {
        res.render('cars/new', { cars })
      })
  })

//Car SHOW
app.get('/cars/:indexOfCarsArray', (req, res) => {
    Car.findById(req.params.indexOfCarsArray)
    .then((car)=>{
      res.render('show', {
        car: car
      })
    })
  })

// Car EDIT
app.get('/cars/:id/edit', (req, res) => {
    let cars= []
     Fruit.find()
    .then(car => {
      cars= car
    })
    car.findById(req.params.id)
      .then(car => {
        res.render('cars/edit', { car,cars }) //Fruit.find()
      })
  })
  
// Car DELETE
  app.delete('/cars/:id', (req, res) => {
    car.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/cars');
      })
  })
  
//Car PUT
  app.put('/cars/:id', (req, res) => {
    let updated = req.body
    car.findByIdAndUpdate(req.params.id, updated)
      .then(car => {
        res.redirect(`/cars/${car._id}`);
      })
  })

//Driver
//Driver INDEX
app.get('/drivers', (req, res) => {
    Driver.find()
    .then((drivers)=>{
      res.render('index', { drivers })
    })
    .catch(err => console.log(err))
  })

//Driver NEW
app.get('/drivers/new', (req, res) => {
    Driver.find()
      .then(drivers => {
        res.render('drivers/new', { drivers })
      })
  })

//Driver SHOW
app.get('/drivers/:indexOfDriversArray', (req, res) => {
    Driver.findById(req.params.indexOfDriversArray)
    .then((driver)=>{
      res.render('show', {
        driver: driver
      })
    })
  })

//Driver EDIT
app.get('/drivers/:id/edit', (req, res) => {
    let drivers= []
     Driver.find()
    .then(driver => {
      drivers= driver
    })
    driver.findById(req.params.id)
      .then(driver => {
        res.render('drivers/edit', { driver,drivers })
      })
  })
  
//Driver DELETE
  app.delete('/drivers/:id', (req, res) => {
    driver.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/drivers');
      })
})
  
//Driver PUT
  app.put('/drivers/:id', (req, res) => {
    let updated = req.body
    driver.findByIdAndUpdate(req.params.id, updated)
      .then(driver => {
        res.redirect(`/drivers/${driver._id}`);
      })
})

//Company
//index
app.get('/companys', (request, response) => {
    Company.find().then((companys) => {
        response.render('index', {companys})
    }).catch((error) => {
        console.log(error);
    })
})

//new
app.get('/companys/new', (request, response) => {
    response.render('new')
})

//post
app.post('/companys', (req, res) => {
    let data= {
        name: req.body.name, 
        logo:req.body.logo,
        address:req.body.address, 
        city: req.body.city,
        telephone:req.body.telephone}
    let driver= {
            name: req.body.driverName,
            age: req.body.driverAge,
            image: req.body.driverImage}
    let car = {
            name: req.body.carName,
            model: req.body.carModel,
            year:req.body.carYear,
            image: req.body.carImage}
    
    let company= new Company(data)
    company.drivers.push(driver) 
    company.cars.push(car)
    company.save()
    .then(() => {
        res.redirect('/companys')
    })
    .catch((error) => {
        console.log(error); 
    })
})

//update
app.get('/companys/:id', (req, response) => {
    response.render('edit', {
        company: companys[req.params.id],
        id: req.params.id
    })
})

app.put('/companys/:id', (req, res) => {
    console.log(req.body)
    companys[req.params.id]= req.body;
    res.redirect('/companys')
})

//delete
app.delete('/companys/:id', (req, res) => {
    companys.splice(req.params.id, 1); //remove the item from the array
    res.redirect('/companys');  //redirect back to index route
});


//show
app.get('/company/:id', (req, response) => {
    Company.findById(req.params.id)
    .then((company)=>{
      response.render('show', {
          company: company
    })
    .catch(error => console.log(error))
      })
  })
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})