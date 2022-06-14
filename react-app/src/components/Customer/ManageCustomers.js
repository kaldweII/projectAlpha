import { NavLink } from "react-router-dom";

function ManageCustomers(){
    return (
        <NavLink
            to="/customers"
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
        >
            Manage Customers
        </NavLink>
    )
}

export default ManageCustomers;