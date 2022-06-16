import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddContract from '../Contract/AddContract';
import ContractList from '../Contract/ContractList';

function ManageContracts() {

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
    )
}

export default ManageContracts;