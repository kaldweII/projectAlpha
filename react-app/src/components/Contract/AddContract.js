import './AddContract.css';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as customerActions from '../../store/customer';

function AddContract() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [start_date, setStartDate] = useState('');
    const [est_end_date, setEstEndDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const [original_amount, setOriginalAmount] = useState('');
    const [billed_amount, setBilledAmount] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newContract = {
            type, description, start_date, est_end_date, end_date, status, original_amount, billed_amount
        }

        // Run request. // MODIFY FOR BACKEND
        const data = dispatch(customerActions.addCustomer(newContract));

        // Close the modal and reset form state.
        handleClose();
        setType('');
        setDescription('');
        setStartDate('');
        setEstEndDate('');
        setEndDate('');
        setStatus('');
        setOriginalAmount('');
        setBilledAmount('');

        // Return request data.
        return data;
    }

    return (
        <div className="dashTile">
            <Button className="dashButton" variant="light" onClick={handleShow}>
                Manage Contracts
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Contract</Modal.Title>
                </Modal.Header>
                <Modal.Body className='contractsModalBody'>
                    <form onSubmit={handleSubmit} id='contractsForm' className='contractsForm'>     
                        <div className='formInput'>
                            <label htmlFor='type'></label>
                            <input 
                            className='input'
                            name='type'
                            type='text'
                            placeholder='Type*'
                            value={type}
                            onChange={e => setType(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='description'></label>
                            <input
                            className='input'
                            name='description'
                            type='text'
                            placeholder='Description*'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='start_date'></label>
                            <input
                            className='input'
                            name='start_date'
                            type='text'
                            placeholder='Start Date*'
                            value={start_date}
                            onChange={e => setStartDate(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='est_end_date'></label>
                            <input
                            className='input'
                            name='est_end_date'
                            type='text'
                            placeholder='Est. End Date*'
                            value={est_end_date}
                            onChange={e => setEstEndDate(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='end_date'></label>
                            <input
                            className='input'
                            name='end_date'
                            type='text'
                            placeholder='End Date*'
                            value={end_date}
                            onChange={e => setEndDate(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='status'></label>
                            <input
                            className='input'
                            name='status'
                            type='text'
                            placeholder='Status*'
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            required
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='original_amount'></label>
                            <input
                            className='input'
                            name='original_amount'
                            type='text'
                            placeholder='Original Amount*'
                            value={original_amount}
                            onChange={e => setOriginalAmount(e.target.value)}
                            />
                        </div>
                        <div className='formInput'>
                            <label htmlFor='billed_amount'></label>
                            <input
                            className='input'
                            name='billed_amount'
                            type='text'
                            placeholder='Billed Amount'
                            value={billed_amount}
                            onChange={e => setBilledAmount(e.target.value)}
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
                    <Button variant="primary" type='submit' form='contractsForm'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddContract;