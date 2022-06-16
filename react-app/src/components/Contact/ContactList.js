import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as contactActions from '../../store/contact'
import { useDispatch, useSelector } from 'react-redux';
import '../View.css'



function ContactList() {
    const contacts = useSelector(state => Object.values(state.contacts));
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(contactActions.getContacts());
    }, [dispatch, userId]);



    return (
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>LinkedIn</th>

                </tr>
                {contacts.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td><NavLink
                                to={`/contacts/${val.first_name}${val.last_name}`}
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                {val.first_name} {val.last_name}
                            </NavLink></td>
                            <td>{val.email}</td>
                            <td>{val.mobile_phone_number}</td>
                            <td><a
                                href={val.linkedin_url}
                                target="blank"
                            >
                                {val.linkedin_url}
                            </a></td>

                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default ContactList;
