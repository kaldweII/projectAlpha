import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as customerActions from '../../store/customer';
import AddCustomer from './AddCustomer';
import ManageCustomers from './ManageCustomers';


function Customer() {
    return (
        <div>

            <AddCustomer/>
            <ManageCustomers/>
        </div>
    );
}

export default Customer;