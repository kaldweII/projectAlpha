
import Contact from "../Contact";
import Contract from "../Contract";
import Role from "../Role";
import Customer from "../Customer";
import './Dashboard.css'
// import loginBkg from '../../assets/LoginArt.png'

function Dashboard(){

    return(
        <div className="dashboard">
            {/* <img src={loginBkg}></img> */}
            <h1 className="dashHeading">Dashboard</h1>
            <div className="dashboardTiles">
                <Customer/>
                <Contact/>
                <Contract/>
                <Role/>
            </div>
        </div>
    )
}

export default Dashboard;