
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
            <h1>Dashboard</h1>
            <Contract/>
            <Role/>
            <Customer/>
            <Contact/>

        </div>
    )
}

export default Dashboard;