import {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import AddEmployee from './AddEmployee';


function Employee() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <AddEmployee/>
    );
}

export default Employee;