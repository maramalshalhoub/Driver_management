import React from 'react';

const Car = props => (
    <div>
        <form action="/cars" method="POST">
        <h6>Car Details:</h6>
        <label for="carName">Car Name</label>
        <input type="text" name="carName" id="carName" />   
        <label for="carModel">Car Model</label>
        <input type="text" name="carModel" id="carModel" /> 
        <label for="carYear">Car Year</label>
        <input type="text" name="carYear" id="carYear" />   
        <label for="carImage">Car Image</label>
        <input type="text" name="carImage" id="carImage" />  
        {/* <input type="submit" value="Create Car Collection"> */}
        {/* <button onClick={this.submitHandler}>Create Car</button> */}
        </form>
    </div>
)
export default Car;