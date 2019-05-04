import React from 'react';

const Company = props => (
    <div>
        <form action="/companys" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label for="logo">logo</label>
        <input type="text" name="logo" id="logo" />
        <label for="address">address</label>
        <input type="text" name="address" id="address" />
        <label for="city">city</label>
        <input type="text" name="city" id="city" />
        <label for="telephone">telephone</label>
        <input type="text" name="telephone" id="telephone" />
        </form>
    </div>
)
export default Company;