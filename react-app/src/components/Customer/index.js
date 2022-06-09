import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/session';
import CustomersForm from './CustomersForm.js'


function Customer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [alias, setAlias] = useState('');
    const dispatch = useDispatch();

    // const onCreate = async (e) => {
    //     e.preventDefault();
    //     const data = await dispatch(login(email, password));
    //     if (data) {
    //     setErrors(data);
    //     }
    // };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateAlias = (e) => {
        setAlias(e.target.value);
    };

    return (
        <div className="dashTile">
            <Button className="dashButton" variant="success" onClick={handleShow}>
                Manage Customers
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Customers</Modal.Title>
                </Modal.Header>
                <Modal.Body className='customersModalBody'>
                    <center><form /*onSubmit={onCreate}*/ className='customersForm'>     
                        <div className='formInput'>
                            <label htmlFor='name'></label>
                            <input className='input'
                            
                            name='name'
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={updateName}
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
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='state_or_province'></label>
                            <input
                            className='input'
                            name='state_or_province'
                            type='state_or_province'
                            placeholder='State/Province'
                            value={alias}
                            onChange={updateAlias}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='zip'></label>
                            <input
                            className='input'
                            name='zip'
                            type='zip'
                            placeholder='Zip'
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='primary_phone_ext'></label>
                            <input
                            className='input'
                            name='primary_phone_ext'
                            type='primary_phone_ext'
                            placeholder='Primary Phone Extension'
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='secondary_phone_ext'></label>
                            <input
                            className='input'
                            name='secondary_phone_ext'
                            type='secondary_phone_ext'
                            placeholder='Secondary Phone Extension'
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
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
                            value={alias}
                            onChange={updateAlias}
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
                    <Button variant="primary" type='submit' form='customersForm' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Customer;