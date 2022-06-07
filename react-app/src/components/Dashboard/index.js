
import Contact from "../Contact";
import Contract from "../Contract";
import Role from "../Role";
import Company from "../Company";
import './Dashboard.css'

function Dashboard(){

    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Contract/>
            <Role/>
            <Company/>
            <Contact/>

        </div>
    )
}

export default Dashboard;