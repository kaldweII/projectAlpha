import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'moment';
import * as contractActions from '../../store/contract'
import * as customerActions from '../../store/customer'

import { useDispatch, useSelector } from 'react-redux';
import '../View.css'



function ContractList() {
    const contracts = useSelector(state => Object.values(state.contracts));
    const customers = useSelector(state => Object.values(state.customers));

    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(contractActions.getContracts());
        dispatch(customerActions.getCustomers());
    }, [dispatch, userId]);



    return (
        <div className="App">
            <table>
                <tr>
                    <th>Customer</th>
                    <th>Type</th>
                    <th>Start Date</th>
                    <th>Est. End Date</th>

                </tr>
                {contracts.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td><NavLink
                                to={`/customers/${val.id}`}
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                {/* Will need updated when delete crud iss added */}
                                {customers[val.customer - 1].name} 
                            </NavLink></td>
                            <td>{val.type}</td>
                            <td>{Moment(val.start_date).utc(false).format('MM-DD-YYYY')}</td>
                            <td>
                                {Moment(val.est_end_date).utc(false).format('MM-DD-YYYY')}
                            </td>

                        </tr>
                    )
                })}
            </table>
        </div>
    );
}


export default ContractList;
