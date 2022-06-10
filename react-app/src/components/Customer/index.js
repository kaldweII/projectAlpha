import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as customerActions from '../../store/customer';


function Customer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [alias, setAlias] = useState('');
    const [address, setAddress] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [country_code, setCountryCode] = useState('');
    const [primary_phone, setPrimaryPhone] = useState('');
    const [primary_phone_extension, setPrimaryPhoneExtension] = useState('');
    const [secondary_phone, setSecondaryPhone] = useState('');
    const [secondary_phone_extension, setSecondaryPhoneExt] = useState('');
    const [site_link, setSiteLink] = useState('');
    const [industry, setIndustry] = useState('');
    const [db_num, setDBNum] = useState('');
    const [invoice_email, setInvoiceEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newCustomer = {
            name, alias, address, suite, city, state, zipcode, country, country_code,
            primary_phone, primary_phone_extension, secondary_phone, secondary_phone_extension,
            site_link, industry, db_num, invoice_email

        }

        return dispatch(customerActions.addCustomer(newCustomer))
        .then(
            (response) => {
                if (response.errors){
                    setErrors(response.errors)
                    return
                }
            }
        )
    }





    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateAlias = (e) => {
        setAlias(e.target.value);
    };

    const updateAddress = (e) => {
        setAddress(e.target.value);
    };

    const updateSuite = (e) => {
        setSuite(e.target.value);
    };

    const updateCity = (e) => {
        setCity(e.target.value);
    };

    const updateState = (e) => {
        setState(e.target.value);
    };

    const updateZip = (e) => {
        setZip(e.target.value);
    };

    const updateCountry = (e) => {
        setCountry(e.target.value);
    };

    const updateCountryCode = (e) => {
        setCountryCode(e.target.value);
    };

    const updatePrimaryPhone = (e) => {
        setPrimaryPhone(e.target.value);
    };

    const updatePrimaryPhoneExtension = (e) => {
        setPrimaryPhoneExtension(e.target.value);
    };

    const updateSecondaryPhone = (e) => {
        setSecondaryPhone(e.target.value);
    };

    const updateSecondaryPhoneExt = (e) => {
        setSecondaryPhoneExt(e.target.value);
    };

    const updateSiteLink = (e) => {
        setSiteLink(e.target.value);
    };

    const updateIndustry = (e) => {
        setIndustry(e.target.value);
    };

    const updateDBNum = (e) => {
        setDBNum(e.target.value);
    };

    const updateInvoiceEmail = (e) => {
        setInvoiceEmail(e.target.value);
    };

    return (
        <div className="dashTile">
            <Button className="dashButton" variant="light" onClick={handleShow}>
                Manage Customers
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Customers</Modal.Title>
                </Modal.Header>
                <Modal.Body className='customersModalBody'>
                    <center><form onSubmit={handleSubmit} id='customersForm' className='customersForm'>     
                        <div className='formInput'>
                            <label htmlFor='name'></label>
                            <input className='input'
                            
                            name='name'
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='alias'></label>
                            <input
                            className='input'
                            name='alias'
                            type='alias'
                            placeholder='Alias'
                            value={alias}
                            onChange={updateAlias}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='address'></label>
                            <input
                            className='input'
                            name='address'
                            type='address'
                            placeholder='Address'
                            value={address}
                            onChange={updateAddress}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='suite'></label>
                            <input
                            className='input'
                            name='suite'
                            type='suite'
                            placeholder='Suite'
                            value={suite}
                            onChange={updateSuite}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='city'></label>
                            <input
                            className='input'
                            name='city'
                            type='city'
                            placeholder='City'
                            value={city}
                            onChange={updateCity}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='state'></label>
                            <input
                            className='input'
                            name='state'
                            type='state'
                            placeholder='State/Province'
                            value={state}
                            onChange={updateState}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='zipcode'></label>
                            <input
                            className='input'
                            name='zipcode'
                            type='zipcode'
                            placeholder='Zipcode'
                            value={zipcode}
                            onChange={updateZip}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='country'></label>
                            <input
                            className='input'
                            name='country'
                            type='country'
                            placeholder='Country'
                            value={country}
                            onChange={updateCountry}
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
                            <label htmlFor='primary_phone'></label>
                            <input
                            className='input'
                            name='primary_phone'
                            type='primary_phone'
                            placeholder='Primary Phone'
                            value={primary_phone}
                            onChange={updatePrimaryPhone}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='primary_phone_extension'></label>
                            <input
                            className='input'
                            name='primary_phone_extension'
                            type='primary_phone_extension'
                            placeholder='Primary Phone Extension'
                            value={primary_phone_extension}
                            onChange={updatePrimaryPhoneExtension}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='secondary_phone'></label>
                            <input
                            className='input'
                            name='secondary_phone'
                            type='secondary_phone'
                            placeholder='Secondary Phone'
                            value={secondary_phone}
                            onChange={updateSecondaryPhone}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='secondary_phone_extension'></label>
                            <input
                            className='input'
                            name='secondary_phone_extension'
                            type='secondary_phone_extension'
                            placeholder='Secondary Phone Extension'
                            value={secondary_phone_extension}
                            onChange={updateSecondaryPhoneExt}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='site_link'></label>
                            <input
                            className='input'
                            name='site_link'
                            type='site_link'
                            placeholder='Website Link'
                            value={site_link}
                            onChange={updateSiteLink}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='industry'></label>
                            <input
                            className='input'
                            name='industry'
                            type='industry'
                            placeholder='Industry'
                            value={industry}
                            onChange={updateIndustry}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='db_num'></label>
                            <input
                            className='input'
                            name='db_num'
                            type='db_num'
                            placeholder='D&B Number'
                            value={db_num}
                            onChange={updateDBNum}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='invoice_email'></label>
                            <input
                            className='input'
                            name='invoice_email'
                            type='invoice_email'
                            placeholder='Invoice Email'
                            value={invoice_email}
                            onChange={updateInvoiceEmail}
                            required
                            />
                        </div>
                    
                        <div className='customerErrors'>
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
                    <Button variant="primary" type='submit' form='customersForm' /*onClick={handleClose}*/>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Customer;