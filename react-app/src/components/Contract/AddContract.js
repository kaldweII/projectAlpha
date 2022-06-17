import './AddContract.css';
import { useState, useEffect } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as contractActions from '../../store/contract';
import * as customerActions from '../../store/customer';
import '../View.css'

function AddContract() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [type, setType] = useState(null);
    const [description, setDescription] = useState(null);
    const [start_date, setStartDate] = useState(null);
    const [est_end_date, setEstEndDate] = useState(null);
    const [end_date, setEndDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [original_amount, setOriginalAmount] = useState(null);
    const [billed_amount, setBilledAmount] = useState(null);

    const customers = useSelector(state => Object.values(state.customers));
    const userId = useSelector(state => state.session.user.id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(customerActions.getCustomers());
    }, [dispatch, userId]);

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newContract = {
            type, description, start_date, est_end_date, end_date, status, customer, original_amount, billed_amount
        }

        // Run request.
        const data = dispatch(contractActions.addContract(newContract));

        // Close the modal and reset form state.
        handleClose();
        setType(null);
        setDescription(null);
        setStartDate(null);
        setEstEndDate(null);
        setEndDate(null);
        setStatus(null);
        setCustomer(null);
        setOriginalAmount(null);
        setBilledAmount(null);

        // Return request data.
        return data;
    }

    return (
        <div className="">
            <Button className="addButton" variant="success" onClick={handleShow}>
                Add Contract
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Contract</Modal.Title>
                </Modal.Header>
                <Modal.Body className='contractsModalBody'>
                    <form onSubmit={handleSubmit} id='contractsForm' className='contractsForm'>
                    <div className='formInput'>
                            <select className="input" name="customerSelect" id="customerSelect" onChange={e => setCustomer(e.target.value)} required>
                                <option value={null} disabled selected>Select a Customer*</option>
                                {customers.map((val) => {
                                    return (
                                        <option
                                            name='customer_id'
                                            value={val.id}
                                        >
                                        {val.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='formInput'>
                            <select className="input" name="customerSelect" id="customerSelect" onChange={e => setType(e.target.value)} required>
                                <option value={null} disabled selected>Select a Type*</option>
                                <option value="Fixed Fee">Fixed Fee</option>
                                <option value="Time & Expense">Time & Expense</option>
                            </select>
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
                            placeholder='End Date'
                            value={end_date}
                            onChange={e => setEndDate(e.target.value)}
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