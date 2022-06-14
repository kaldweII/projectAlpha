import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as customerActions from '../../store/customer'
import { useDispatch, useSelector } from 'react-redux';
import './Customer.css'



function CustomerList() {
    const customers = useSelector(state => Object.values(state.customers));
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(customerActions.getCustomers());
    }, [dispatch, userId]);



    return (
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>

                </tr>
                {customers.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.city}</td>
                            <td>{val.state}</td>

                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default CustomerList;
