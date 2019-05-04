const router = require('express').Router()
const Driver = require('../models/driver')

//driver routes
router.get('/', (req, res) => {

    Driver.find({}).then(driver =>{
      res.status(200).json({drivers : driver })
    })
    .catch(err => {
      res.json({ message: err })
    })
    res.json({message: "root page"})
  })
  
//driver routes
router.get('/', (req, res) => {
    Driver.find({})
    // .populate('cars')
    .then(driver =>{
      res.status(200).json({ count:driver.length, drivers : driver })
      return false
    })
    .catch(err => {
      res.json({ message: err })
      return false
    })
  })
  
router.get('/:id', (req, res) => {
    //find drivers
    Driver.findById(req.params.id)
    // .populate('cars')
    .then(driver => {
      res.json({driver:driver, message: "suc"})
    }).catch(err => {
      res.json({message: err })
    })
  })
  
router.post('/new', (req, res) => {
    //find drivers
    let inputData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      image: req.body.image
    }
  
    let driver = new Driver(inputData)
    driver.save()
    .then(() => {
      res.json({ message: "Driver Added!"})
      return false
    })
    .catch(err => {
        res.json({ message: err})
    })
  })
  
router.put('/driver/:id', (req, res) => {
    //find drivers 5cc31a3ba5893a210fa23428"
    let inputData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      image: req.body.image
    }
  
    Driver.findOneAndUpdate({_id: req.params.id},{$set:inputData}).then(driver => {
      res.status(200).json({...driver})
    }).catch(err => {
      res.json({message: err })
    })
  })

module.exports = router;



// //Driver
// //Driver INDEX
// app.get('/drivers', (req, res) => {
//   Driver.find()
//   .then((drivers)=>{
//     res.render('index', { drivers })
//   })
//   .catch(err => console.log(err))
// })

// //Driver NEW
// app.get('/drivers/new', (req, res) => {
//   Driver.find()
//     .then(drivers => {
//       res.render('drivers/new', { drivers })
//     })
// })

// //Driver SHOW
// app.get('/drivers/:indexOfDriversArray', (req, res) => {
//   Driver.findById(req.params.indexOfDriversArray)
//   .then((driver)=>{
//     res.render('show', {
//       driver: driver
//     })
//   })
// })

// //Driver EDIT
// app.get('/drivers/:id/edit', (req, res) => {
//   let drivers= []
//    Driver.find()
//   .then(driver => {
//     drivers= driver
//   })
//   driver.findById(req.params.id)
//     .then(driver => {
//       res.render('drivers/edit', { driver,drivers })
//     })
// })

// //Driver DELETE
// app.delete('/drivers/:id', (req, res) => {
//   driver.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.redirect('/drivers');
//     })
// })

// //Driver PUT
// app.put('/drivers/:id', (req, res) => {
//   let updated = req.body
//   driver.findByIdAndUpdate(req.params.id, updated)
//     .then(driver => {
//       res.redirect(`/drivers/${driver._id}`);
//     })
// })