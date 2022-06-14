import {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import AddRole from './AddRole';


function Role() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <AddRole/>
    );
}

export default Role;