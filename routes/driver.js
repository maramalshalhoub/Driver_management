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