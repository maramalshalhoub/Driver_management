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



// //Car INDEX
// app.get('/cars', (req, res) => {
//   Car.find()
//   .then((cars)=>{
//     res.render('index', { cars })
//   })
//   .catch(err => console.log(err))
// })

// //Car NEW
// app.get('/cars/new', (req, res) => {
//   Car.find()
//     .then(cars => {
//       res.render('cars/new', { cars })
//     })
// })

// //Car SHOW
// app.get('/cars/:indexOfCarsArray', (req, res) => {
//   Car.findById(req.params.indexOfCarsArray)
//   .then((car)=>{
//     res.render('show', {
//       car: car
//     })
//   })
// })

// // Car EDIT
// app.get('/cars/:id/edit', (req, res) => {
//   let cars= []
//    Fruit.find()
//   .then(car => {
//     cars= car
//   })
//   car.findById(req.params.id)
//     .then(car => {
//       res.render('cars/edit', { car,cars }) //Fruit.find()
//     })
// })

// // Car DELETE
// app.delete('/cars/:id', (req, res) => {
//   car.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.redirect('/cars');
//     })
// })

// //Car PUT
// app.put('/cars/:id', (req, res) => {
//   let updated = req.body
//   car.findByIdAndUpdate(req.params.id, updated)
//     .then(car => {
//       res.redirect(`/cars/${car._id}`);
//     })
// })
