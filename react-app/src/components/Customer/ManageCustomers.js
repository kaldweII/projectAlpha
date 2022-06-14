import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function ManageCustomers(){
    return (
        <NavLink
            to="/customers"
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
        >
            <Button className="dashButton" variant="light">
                Manage Customers
            </Button>
        </NavLink>
    )
}

export default ManageCustomers;