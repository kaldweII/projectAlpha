import '../View.css'
import asarLogo from '../../assets/asarLogo.png'
import AddContact from '../Contact/AddContact';
import ContactList from '../Contact/ContactList';
import { useSelector } from 'react-redux';

function ManageContacts() {
    const userRole = useSelector(state => state.session.user.role)

    if (userRole === 'admin') {
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
        );
    } else {
        return (
            <div className='dashboard notAuthorized'><p>Error: You are not authorized to view this page.</p></div>
        );
    } 
}

export default ManageContacts;