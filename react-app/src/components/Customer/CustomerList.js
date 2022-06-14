import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as customerActions from '../../store/customer'
import { useDispatch, useSelector } from 'react-redux';


function CustomerList() {
    const customers = useSelector(state => Object.values(state.customers));
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(customerActions.getCustomers());
    }, [dispatch, userId]);

    const customerComponents = customers.map((customer) => {
        return (
            <li key={customer.id}>
                <NavLink to={`/customers/${customer.id}`}>{customer.name} {customer.address} {customer.city}, {customer.state} {customer.zipcode} </NavLink>
            </li>
        );
    });

    return (
        <>
            <h1>Customer List: </h1>
            <ul>{customerComponents}</ul>
        </>
    );
}

export default CustomerList;
