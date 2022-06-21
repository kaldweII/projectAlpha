import './SideNav.css';
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { CaretDown, CaretRight } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';


function SideNav() {
    const [ open, setOpen ] = useState(true);
    const userRole = useSelector(state => state.session.user.role)

    if (userRole === 'contractor') {
        return (
            <div class="sidebar">
                <div class="section">
                <div className='navLink'
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                        <button class="item">Navigation <span>{open ? <CaretDown style={{ height: 15 }} /> : <CaretRight style={{ height: 15 }}/>}</span></button>
                </div>
                <Collapse in={open}>
                    <div id="example-collapse-text" className='collapsed-item'>
                    <NavLink className='navLink' to='/' exact={true} activeClassName='active'>
                         Dashboard
                    </NavLink>
                    </div>
                </Collapse>
                </div>
            </div>
        );
    }

    return (
        <div class="sidebar">
            <div class="section">
            <div className='navLink'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                    <button class="item">Navigation <span>{open ? <CaretDown style={{ height: 15 }} /> : <CaretRight style={{ height: 15 }}/>}</span></button>
            </div>
            <Collapse in={open}>
                <div id="example-collapse-text" className='collapsed-item'>
                <NavLink className='navLink' to='/' exact={true} activeClassName='active'>
                     Dashboard
                </NavLink>
                <NavLink className='navLink' to='/customers' exact={true} activeClassName='active'>
                    Customers
                </NavLink>
                <NavLink className='navLink' to='/contacts' exact={true} activeClassName='active'>  
                    Contacts
                </NavLink>
                <NavLink className='navLink' to='/contracts' exact={true} activeClassName='active'>
                     Contracts
                </NavLink>
                {/* <NavLink className='navLink' to='/employees' exact={true} activeClassName='active'>
                    Employees
                </NavLink> */}
                </div>
            </Collapse>
            </div>
        </div>
    );
}

export default SideNav;