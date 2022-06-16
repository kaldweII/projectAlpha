import Contact from "../Contact";
import Contract from "../Contract";
import Role from "../Role";
import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import ManageCustomers from "../Customer/ManageCustomersButton";
import ManageContacts from "../Contact/ManageContactsButton";

function Dashboard(){

    return(
        <div className="dashboard">
            <div className="dashBkg"></div>
            <div className="dashHeaderContainer">
                <h1 className="dashHeading">Dashboard</h1>
            </div>
            <div className="dashboardTiles">
                <ManageCustomers/>
                <ManageContacts/>
                <Contract/>
                <Role/>
            </div>
            <img className='companyLogo' src={asarLogo}></img>
        </div>
    )
}

export default Dashboard;