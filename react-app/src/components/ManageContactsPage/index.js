import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddContact from '../Contact/AddContact';
import ContactList from '../Contact/ContactList';

function ManageContacts() {

    return (
        <div className="dashboard">
            <div className="dashBkg"></div>
            <div className="dashHeaderContainer">
                <h1 className="dashHeading">Manage Contacts</h1>
            </div>
            <AddContact />

            <div className="table">
                <ContactList/>
            </div>
            <img className='companyLogo' src={asarLogo}></img>
        </div>
    )
}

export default ManageContacts;