import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function ManageContactsButton() {
    return (
        <NavLink
            to="/contacts"
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
        >
            <Button className="dashButton" variant="light">
                Manage Contacts
            </Button>
        </NavLink>
    )
}

export default ManageContactsButton;