import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as contactActions from '../../store/contact';


function ContactModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [title, setTitle] = useState(null);
    const [country_code, setCountryCode] = useState(null);
    const [mobile_phone_number, setMobilePhoneNumber] = useState(null);
    const [office_phone_number, setOfficePhoneNumber] = useState(null);
    const [office_phone_extension, setOfficePhoneExtension] = useState(null);
    const [linkedin_url, setLinkedinUrl] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newContact = {
            first_name, last_name, email, gender, title, country_code,
            mobile_phone_number, office_phone_number, office_phone_extension,
            linkedin_url

        }

        handleClose();
        setFirstName(null);
        setLastName(null);
        setEmail(null);
        setGender(null);
        setTitle(null);
        setCountryCode(null);
        setMobilePhoneNumber(null);
        setOfficePhoneNumber(null);
        setOfficePhoneExtension(null);
        setLinkedinUrl(null);

        return dispatch(contactActions.addContact(newContact))
        // .then(
        //     (response) => {
        //         if (response.errors){
        //             setErrors(response.errors)
        //             return
        //         }
        //     }
        // )
        

    
    }




    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updateGender = (e) => {
        setGender(e.target.value);
    };

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };


    const updateCountryCode = (e) => {
        setCountryCode(e.target.value);
    };

    const updateMobilePhoneNumber = (e) => {
        setMobilePhoneNumber(e.target.value);
    };

    const updateOfficePhone = (e) => {
        setOfficePhoneNumber(e.target.value);
    };

    const updateOfficePhoneExtension = (e) => {
        setOfficePhoneExtension(e.target.value);
    };

    const updateLinkedinUrl = (e) => {
        setLinkedinUrl(e.target.value);
    };


    return (
        <div className="dashTile">
            <Button className="dashButton" variant="light" onClick={handleShow}>
                Manage Contacts
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body className='contactsModalBody'>
                    <center><form onSubmit={handleSubmit} id='contactsForm' className='contactsForm'>
                        <div className='formInput'>
                            <label htmlFor='first_name'></label>
                            <input className='input'

                                name='first_name'
                                type='first_name'
                                placeholder='First Name'
                                value={first_name}
                                onChange={updateFirstName}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='last_name'></label>
                            <input
                                className='input'
                                name='last_name'
                                type='last_name'
                                placeholder='Last Name'
                                value={last_name}
                                onChange={updateLastName}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='email'></label>
                            <input
                                className='input'
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={updateEmail}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='gender'></label>
                            <input
                                className='input'
                                name='gender'
                                type='gender'
                                placeholder='Gender'
                                value={gender}
                                onChange={updateGender}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='title'></label>
                            <input
                                className='input'
                                name='title'
                                type='title'
                                placeholder='Title'
                                value={title}
                                onChange={updateTitle}
                                required
                            />
                        </div>
                  
                
                        <div className='formInput'>
                            <label htmlFor='country_code'></label>
                            <input
                                className='input'
                                name='country_code'
                                type='country_code'
                                placeholder='Country Code'
                                value={country_code}
                                onChange={updateCountryCode}
                                required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='mobile_phone_number'></label>
                            <input
                                className='input'
                                name='mobile_phone_number'
                                type='mobile_phone_number'
                                placeholder='Mobile Phone'
                                value={mobile_phone_number}
                                onChange={updateMobilePhoneNumber}
                                required
                            />
                        </div>
                
                        <div className='formInput'>
                            <label htmlFor='office_phone_number'></label>
                            <input
                                className='input'
                                name='office_phone_number'
                                type='office_phone_number'
                                placeholder='Office Phone'
                                value={office_phone_number}
                                onChange={updateOfficePhone}
                                
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='office_phone_extension'></label>
                            <input
                                className='input'
                                name='office_phone_extension'
                                type='office_phone_extension'
                                placeholder='Office Phone Extension'
                                value={office_phone_extension}
                                onChange={updateOfficePhoneExtension}
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='linkedin_url'></label>
                            <input
                                className='input'
                                name='linkedin_url'
                                type='linkedin_url'
                                placeholder='LinkedIn'
                                value={linkedin_url}
                                onChange={updateLinkedinUrl}
                                
                            />
                        </div>
                  
        

                        <div className='contactErrors'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                    </form></center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' form='contactsForm' /*onClick={handleClose}*/>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactModal;