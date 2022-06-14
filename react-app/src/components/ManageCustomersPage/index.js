import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddCustomer from '../Customer/AddCustomer';
import CustomerList from '../Customer/CustomerList';

function ManageCustomers() {

    return (
        <div className="dashboard">
            <div className="dashBkg"></div>
            <div className="dashHeaderContainer">
                <h1 className="dashHeading">Manage Customers</h1>
            </div>
            <div className="">
                <AddCustomer/>
                <CustomerList/>
              
            </div>
            <img className='companyLogo' src={asarLogo}></img>
        </div>
    )
}

export default ManageCustomers;