const express = require('express')
const router = express.Router()
const Company = require('../models/company')

////company routes
router.post('/new', (req, res) => {

    let inputData = {
        name: req.body.name,
        image: req.body.image,
        logo:req.body.logo,
        address:req.body.address, 
        city: req.body.city,
        telephone:req.body.telephone
    }

    Company.create(inputData)
    .then(() => {
      res.json({ message: "Company Added!"})
      return false
    })
    .catch(err => res.json({message: err}))
  })
  
  
  router.put('/:id/car/new', (req, res) => {
  
    let inputData = {
      cars : req.params.cars
    }
  
    Company.findOneAndUpdate(req.params.id,{ $push :{ cars: req.body.cars }})
    .then(() => {
      res.json({ message: "Company Added!"})
      return false
    })
    .catch(err => res.json({message: err}))
  })
  
  router.get('/', (req, res) => {
  
    Company.find({})
    .populate({path: 'cars', model: 'Car'})
    .then(company =>{
      res.status(200).json({ company : company })
      return false
    })
    .catch(err => {
      res.json({ message: err })
      return false
    })
  })
  
  router.get('/:id', (req, res) => {
    Company.findById(req.params.id)
    .populate('cars')
    .exec((err, company) =>{
      if (err){
        res.json({ message: err })
        return false;
      }
  
      res.status(200).json({company : company })
      return false
    })
  })
  module.exports = router;

// //Company
// //index
// app.get('/companys', (request, response) => {
//     Company.find().then((companys) => {
//         response.render('index', {companys})
//     }).catch((error) => {
//         console.log(error);
//     })
// })

// //new
// app.get('/companys/new', (request, response) => {
//     response.render('new')
// })

// //post
// app.post('/companys', (req, res) => {
//     let data= {
//         name: req.body.name, 
//         logo:req.body.logo,
//         address:req.body.address, 
//         city: req.body.city,
//         telephone:req.body.telephone}
//     let driver= {
//             name: req.body.driverName,
//             age: req.body.driverAge,
//             image: req.body.driverImage}
//     let car = {
//             name: req.body.carName,
//             model: req.body.carModel,
//             year:req.body.carYear,
//             image: req.body.carImage}
    
//     let company= new Company(data)
//     company.drivers.push(driver) 
//     company.cars.push(car)
//     company.save()
//     .then(() => {
//         res.redirect('/companys')
//     })
//     .catch((error) => {
//         console.log(error); 
//     })
// })

// //update
// app.get('/companys/:id', (req, response) => {
//     response.render('edit', {
//         company: companys[req.params.id],
//         id: req.params.id
//     })
// })

// app.put('/companys/:id', (req, res) => {
//     console.log(req.body)
//     companys[req.params.id]= req.body;
//     res.redirect('/companys')
// })

// //delete
// app.delete('/companys/:id', (req, res) => {
//     companys.splice(req.params.id, 1); //remove the item from the array
//     res.redirect('/companys');  //redirect back to index route
// });


// //show
// app.get('/company/:id', (req, response) => {
//     Company.findById(req.params.id)
//     .then((company)=>{
//       response.render('show', {
//           company: company
//     })
//     .catch(error => console.log(error))
//       })
//   })
  