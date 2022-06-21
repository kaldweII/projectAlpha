import '../View.css'
import './Dashboard.css'
import asarLogo from '../../assets/asarLogo.png'
import ManageCustomers from "../Customer/ManageCustomersButton";
import ManageContactsButton from "../Contact/ManageContactsButton";
import ManageContractsButton from "../Contract/ManageContractButton";
import ManageEmployeesButton from '../Employee/ManageEmployeesButton';
import Contractor from '../Contractor';
import * as employeeActions from '../../store/employee'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import profilePhoto from '../../assets/profilePhoto.jpeg'




function Dashboard(){
    const userRole = useSelector(state => state.session.user.role)
    const userId = useSelector(state => state.session.user.id)

    const employees = useSelector(state => Object.values(state.employees));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(employeeActions.getEmployees());
    }, [dispatch, userId]);

    const employee = employees.find(employee => employee.id === userId);

    console.log(employee)







    if (userRole === 'contractor' && !employee) {
        return(
            <div className="dashboard">
                <div className="dashBkg"></div>
                <div className="dashHeaderContainer">
                    <h1 className="dashHeading">Dashboard</h1>
                </div>
                <div className="">
                    <Contractor/>
                </div>
                <img className='companyLogo' src={asarLogo}></img>
            </div>
        )
    }

    if (userRole === 'contractor' && employee) {
        return (
            <div className="dashboard">
                <div className="dashBkg"></div>
                <div className="dashHeaderContainer">
                    <h1 className="dashHeading">Dashboard</h1>
                </div>
                <div className="employeeInfo">
                    <img className='profilePhoto' src={profilePhoto}></img>
                    <div><span className='employeeField'>Name:</span> {employee.first_name} {employee.last_name}</div>
                    <div><span className='employeeField'>Role:</span> Contractor </div>
                    <div><span className='employeeField'>Phone:</span> {employee.country_code}{employee.phone_number} </div>
                    <div><span className='employeeField'>Email:</span> {employee.email} </div>
                    <div><span className='employeeField'>Availability:</span> {employee.availability} </div>
                    <div><span className='employeeField'>Address:</span> {employee.address} {employee.city}, {employee.state} {employee.country} {employee.zipcode}</div>

                </div>
                <img className='companyLogo' src={asarLogo}></img>
            </div>
        )
    }

    else {
        return(
            <div className="dashboard">
                <div className="dashBkg"></div>
                <div className="dashHeaderContainer">
                    <h1 className="dashHeading">Dashboard</h1>
                </div>
                <div className="dashboardTiles">
                    <ManageCustomers/>
                    <ManageContactsButton/>
                    <ManageContractsButton/>
                    <ManageEmployeesButton/>
                </div>
                <img className='companyLogo' src={asarLogo}></img>
            </div>
        )
    }
}

export default Dashboard;