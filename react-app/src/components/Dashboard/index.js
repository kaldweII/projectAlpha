
import Contact from "../Contact";
import Contract from "../Contract";
import Role from "../Role";
import Company from "../Company";
import './Dashboard.css'
// import loginBkg from '../../assets/LoginArt.png'

function Dashboard(){

    return(
        <div className="dashboard">
            {/* <img src={loginBkg}></img> */}
            <h1>Dashboard</h1>
            <Contract/>
            <Role/>
            <Company/>
            <Contact/>

        </div>
    )
}

export default Dashboard;