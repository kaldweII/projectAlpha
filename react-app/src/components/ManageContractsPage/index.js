import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddContract from '../Contract/AddContract';
import ContractList from '../Contract/ContractList';
import { useSelector } from 'react-redux';

function ManageContracts() {
    const userRole = useSelector(state => state.session.user.role)

    if (userRole === 'admin') {
        return (
            <div className="dashboard">
                <div className="dashBkg"></div>
                <div className="dashHeaderContainer">
                    <h1 className="dashHeading">Manage Contracts</h1>
                </div>
                <AddContract />

                <div className="table">
                    <ContractList />
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

export default ManageContracts;