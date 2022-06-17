import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddEmployee from '../Employee/AddEmployee';
import EmployeeList from '../Employee/EmployeeList';

function ManageEmployees() {

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
    )
}

export default ManageEmployees;