import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as customerActions from '../../store/customer';
import AddCustomer from './AddCustomer';


function Customer() {
    return (
        <AddCustomer/>
    );
}

export default Customer;