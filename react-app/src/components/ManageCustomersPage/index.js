import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddCustomer from '../Customer/AddCustomer';
import CustomerList from '../Customer/CustomerList';
import { useSelector } from 'react-redux';

function ManageCustomers() {
    const userRole = useSelector(state => state.session.user.role)

    if (userRole === 'admin') {
        return (
            <div className="dashboard">
                <div className="dashBkg"></div>
                <div className="dashHeaderContainer">
                    <h1 className="dashHeading">Manage Customers</h1>
                </div>
                <AddCustomer />
                <div className="table">
                    <CustomerList/>
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

export default ManageCustomers;