import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import AddContract from './AddContract';


function Contract() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <AddContract/>
    );
}

export default Contract;