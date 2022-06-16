import './SideNav.css';
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

function SideNav() {
    const [ open, setOpen ] = useState(false);

    return (
        <div class="sidebar">
            <div class="section">
            <div className='navLink'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <button class="item">Items</button>
            </div>
            <Collapse in={open}>
                <div id="example-collapse-text">
                <NavLink className='navLink' to='/' exact={true} activeClassName='active'>
                    <button class="collapsed-item">Home</button>
                </NavLink>
                <NavLink className='navLink' to='/users' exact={true} activeClassName='active'>
                    <button class="collapsed-item">Users</button>
                </NavLink>
                </div>
            </Collapse>
            </div>
        </div>
    );
}

export default SideNav;