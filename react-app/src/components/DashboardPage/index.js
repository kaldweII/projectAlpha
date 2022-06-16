import Role from "../Role";
import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import ManageCustomers from "../Customer/ManageCustomersButton";
import ManageContactsButton from "../Contact/ManageContactsButton";
import ManageContractsButton from "../Contract/ManageContractButton";
function Dashboard(){

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
                <Role/>
            </div>
            <img className='companyLogo' src={asarLogo}></img>
        </div>
    )
}

export default Dashboard;