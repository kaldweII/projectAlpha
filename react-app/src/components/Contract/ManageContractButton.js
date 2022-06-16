import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function ManageContractsButton() {
    return (
        <NavLink
            to="/contracts"
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
        >
            <Button className="dashButton" variant="light">
                Manage Contracts
            </Button>
        </NavLink>
    )
}

export default ManageContractsButton;