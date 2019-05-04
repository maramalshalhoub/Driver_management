import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    companys : []
  }

  deleteHandler = (e) => {
    let curr_id = e.target.id
    axios.delete(`/companys/${curr_id}`)
    .then(response => {
      console.log(curr_id)
      let temp = {...this.state}
      let index = temp.companys.findIndex(element => element._id === curr_id)
      temp.companys.splice(index,1)
      this.setState(temp)
    })
    .catch(err => console.log(err))
  }

   
  submitHandler = () =>{
    axios.post("/companys", 
    { name : this.state.name,
      logo : this.state.logo, 
      address : this.state.address, 
      city : this.state.city, 
      telephone : this.state.telephone,
      cars: this.state.cars, 
      drivers: this.state.drivers })

    .then(response => {
      console.log(response)
      let temp = {...this.state}
      temp.companys.push(response.data.company)
      this.setState(temp)
    })
    .catch(err => console.log(err))
  }

  changeHandler = (e) => {
    let temp = {...this.state}
    temp[e.target.name] = e.target.value
    this.setState(temp)
  }

  getCompany = () => {
    axios.get("/companys")
    .then(data => {
      console.log("from my api", data.data)
      let temp = {...this.state} // copy
      temp.companys = data.data.companys // set to api response
      this.setState(temp) //set the state
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getCompany() // load on component mount
  }

  render() {
    console.log(this.state)
    let companys = this.state.companys.map((company, i ) =>{ 
     return <li key={company._id}> {company.name}<button id={company._id} onClick={this.deleteHandler}>delete</button> </li>
    })
      return (
        <div>
          {companys}
          <div>
            <div>
              <label for="name">Name</label>
              <input  name="name" id="name" onChange={this.changeHandler}/>
            </div>
            <div>
              <label for="logo">logo</label>
              <input name="logo" id="logo" onChange={this.changeHandler} />
            </div>
            <div>
              <label for="address">address</label>
              <textarea name="address" id="address" onChange={this.changeHandler}></textarea>
            </div>
            <div>
              <label for="city">city</label>
              <input name="city" id="city" onChange={this.changeHandler} />
            </div>
            <div>
              <label for="telephone">telephone</label>
              <input name="telephone" id="telephone" onChange={this.changeHandler}/>            
            </div>
            <div>
              <button onClick={this.submitHandler}>Create Company</button>
            </div>
          </div>
        </div>
      )
  }
}
export default App;
