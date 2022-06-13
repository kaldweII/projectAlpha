import Contact from "../Contact";
import Contract from "../Contract";
import Role from "../Role";
import AddCustomer from "../Customer/AddCustomer";
import './Dashboard.css'
import asarLogo from '../../assets/asarLogo.png'

function Dashboard(){

    return(
        <div className="dashboard">
            <div className="dashBkg"></div>
            <div className="dashHeaderContainer">
                <h1 className="dashHeading">Dashboard</h1>
            </div>
            <div className="dashboardTiles">
                <AddCustomer/>
                <Contact/>
                <Contract/>
                <Role/>
            </div>
            <img className='companyLogo' src={asarLogo}></img>
        </div>
    )
}

export default Dashboard;