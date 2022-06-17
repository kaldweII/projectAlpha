import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as employeeActions from '../../store/employee'
import * as customerActions from '../../store/customer'

import { useDispatch, useSelector } from 'react-redux';
import '../View.css'



function EmployeeList() {
    const employees = useSelector(state => Object.values(state.employees));

    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(employeeActions.getEmployees());
    }, [dispatch, userId]);



    return (
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Phone Number</th>

                </tr>
                {employees.map((val, key) => {

                    return (
                        <tr key={key}>
                            <td><NavLink
                                to={`/employees/${val.id}`}
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                            </NavLink>{val.first_name} {val.last_name}</td>
                            <td>{val.role}</td>
                            <td>{val.email}</td>
                            <td>
                                {val.phone_number}
                            </td>

                        </tr>
                    )
                })}
            </table>
        </div>
    );
}


export default EmployeeList;
