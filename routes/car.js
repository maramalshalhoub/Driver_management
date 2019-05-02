const express = require('express')
const router = express.Router()
const Car = require('../models/car')

//car routes
router.post('/new', (req, res) => {
    let inputData = {
      name: req.body.name,
      model: req.body.model,
      year: req.body.year,
      image: req.body.image
    }
  
    Car.create(inputData)
    .then(() => {
      res.json({ message: "Car Added!"})
      return false
    })
    .catch(err => res.json({message: err}))
  
    // car.save()
  })
  
  router.get('/', (req, res) => {
  
    Car.find({}).then(car =>{
      res.status(200).json({ count:car.length, cars : car })
      return false
    })
    .catch(err => {
      res.json({ message: err })
      return false
    })
  })
module.exports = router;