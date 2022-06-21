import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import ManageCustomers from "../Customer/ManageCustomersButton";
import ManageContactsButton from "../Contact/ManageContactsButton";
import ManageContractsButton from "../Contract/ManageContractButton";
import ManageEmployeesButton from '../Employee/ManageEmployeesButton';
import Contractor from '../Contractor';
import { useSelector } from 'react-redux';

function Dashboard(){
    const userRole = useSelector(state => state.session.user.role)

    if (userRole === 'contractor') {
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