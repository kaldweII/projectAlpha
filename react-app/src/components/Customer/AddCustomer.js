import './AddCustomer.css';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as customerActions from '../../store/customer';
import '../View.css'

function AddCustomer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(null);
    const [alias, setAlias] = useState(null);
    const [address, setAddress] = useState(null);
    const [suite, setSuite] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zipcode, setZip] = useState(null);
    const [country, setCountry] = useState(null);
    const [country_code, setCountryCode] = useState(null);
    const [primary_phone, setPrimaryPhone] = useState(null);
    const [primary_phone_extension, setPrimaryPhoneExtension] = useState(null);
    const [secondary_phone, setSecondaryPhone] = useState(null);
    const [secondary_phone_extension, setSecondaryPhoneExtension] = useState(null);
    const [site_link, setSiteLink] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [db_num, setDBNum] = useState(null);
    const [invoice_email, setInvoiceEmail] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newCustomer = {
            name, alias, address, suite, city, state, zipcode, country, country_code,
            primary_phone, primary_phone_extension, secondary_phone, secondary_phone_extension,
            site_link, industry, db_num, invoice_email
        }

        // Run request.
        const data = dispatch(customerActions.addCustomer(newCustomer));

        // Close the modal and reset form state.
        handleClose();
        setName(null);
        setAlias(null);
        setAddress(null);
        setSuite(null);
        setCity(null);
        setState(null);
        setZip(null);
        setCountry(null);
        setCountryCode(null);
        setPrimaryPhone(null);
        setPrimaryPhoneExtension(null);
        setSecondaryPhone(null);
        setSecondaryPhoneExtension(null);
        setSiteLink(null); 
        setIndustry(null); 
        setDBNum(null);
        setInvoiceEmail(null);

        // Return request data.
        return data;
    }

    return (
        <div className="">
            <Button className="addButton" variant="success" onClick={handleShow}>
            Add Customer
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
                        Add Customer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddCustomer;