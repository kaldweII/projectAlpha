import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddEmployee from '../Employee/AddEmployee';
import EmployeeList from '../Employee/EmployeeList';
import { useSelector } from 'react-redux';

function ManageEmployees() {
    const userRole = useSelector(state => state.session.user.role)

    if (userRole === 'admin') {
        return (
            <div className="dashboard">
                <div className="dashBkg"></div>
                <div className="dashHeaderContainer">
                    <h1 className="dashHeading">Manage Employees</h1>
                </div>
                <AddEmployee />

                <div className="table">
                    <EmployeeList />
                </div>
                <img className='companyLogo' src={asarLogo}></img>
            </div>
        );
    } else {
        return (
            <div className='dashboard notAuthorized'><p>Error: You are not authorized to view this page.</p></div>
        );
    }
}

export default ManageEmployees;