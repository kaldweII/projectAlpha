import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function ManageEmployeesButton() {
    return (
        <NavLink
            to="/" // route: /employees
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
        >
            <Button className="dashButton" variant="light">
                Manage Employees
            </Button>
        </NavLink>
    )
}

export default ManageEmployeesButton;