import React from 'react';

const Driver = props => (
    <div>
        <form action="/drivers" method="POST">
        <h6>Driver Details:</h6>
        <label for="driverName">DriverName</label>
        <input type="text" name="driverName" id="driverName" />
        <label for="driverAge">Driver Age</label>
        <input type="text" name="driverAge" id="driverAge" />
        <label for="driverImage">Driver Image</label>
        <input type="text" name="driverImage" id="driverImage" />
        {/* <input type="submit" value="Create Driver Collection"> */}
        </form>
    </div>
)
export default Driver;