import './AddCustomer.css';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as customerActions from '../../store/customer';

function AddCustomer() {
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
    const [secondary_phone_extension, setSecondaryPhoneExtension] = useState('');
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

        handleClose();
        return dispatch(customerActions.addCustomer(newCustomer));
        // .then(
        //     (response) => {
        //         if (response.errors){
        //             setErrors(response.errors)
        //             return
        //         }
        //     }
        // )
    }

    return (
        <div className="dashTile">
            <Button className="dashButton" variant="light" onClick={handleShow}>
                Manage Customers
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body className='customersModalBody'>
                    <form onSubmit={handleSubmit} id='customersForm' className='customersForm'>     
                        <div className='formInput'>
                            <label htmlFor='name'></label>
                            <input 
                            className='input'
                            name='name'
                            type='text'
                            placeholder='Name*'
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
                            onChange={e => setAlias(e.target.value)}
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='address'></label>
                            <input
                            className='input'
                            name='address'
                            type='address'
                            placeholder='Address*'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
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
                            onChange={e => setSuite(e.target.value)}
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='city'></label>
                            <input
                            className='input'
                            name='city'
                            type='city'
                            placeholder='City*'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='state'></label>
                            <input
                            className='input'
                            name='state'
                            type='state'
                            placeholder='State/Province*'
                            value={state}
                            onChange={e => setState(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='zipcode'></label>
                            <input
                            className='input'
                            name='zipcode'
                            type='zipcode'
                            placeholder='Zipcode*'
                            value={zipcode}
                            onChange={e => setZip(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='country'></label>
                            <input
                            className='input'
                            name='country'
                            type='country'
                            placeholder='Country*'
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='country_code'></label>
                            <input
                            className='input'
                            name='country_code'
                            type='country_code'
                            placeholder='Country Code*'
                            value={country_code}
                            onChange={e => setCountryCode(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='primary_phone'></label>
                            <input
                            className='input'
                            name='primary_phone'
                            type='primary_phone'
                            placeholder='Primary Phone*'
                            value={primary_phone}
                            onChange={e => setPrimaryPhone(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='primary_phone_extension'></label>
                            <input
                            className='input'
                            name='primary_phone_extension'
                            type='primary_phone_extension'
                            placeholder='Primary Phone Ext.'
                            value={primary_phone_extension}
                            onChange={e => setPrimaryPhoneExtension(e.target.value)}
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
                            onChange={e => setSecondaryPhone(e.target.value)}
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='secondary_phone_extension'></label>
                            <input
                            className='input'
                            name='secondary_phone_extension'
                            type='secondary_phone_extension'
                            placeholder='Secondary Phone Ext.'
                            value={secondary_phone_extension}
                            onChange={e => setSecondaryPhoneExtension(e.target.value)}
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
                            onChange={e => setSiteLink(e.target.value)}
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='industry'></label>
                            <input
                            className='input'
                            name='industry'
                            type='industry'
                            placeholder='Industry*'
                            value={industry}
                            onChange={e => setIndustry(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='db_num'></label>
                            <input
                            className='input'
                            name='db_num'
                            type='db_num'
                            placeholder='D&B Number*'
                            value={db_num}
                            onChange={e => setDBNum(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='invoice_email'></label>
                            <input
                            className='input'
                            name='invoice_email'
                            type='invoice_email'
                            placeholder='Invoice Email*'
                            value={invoice_email}
                            onChange={e => setInvoiceEmail(e.target.value)}
                            required
                            />
                        </div>
                    
                        <div className='customerErrors'>
                            {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                            ))}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' form='customersForm'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddCustomer;