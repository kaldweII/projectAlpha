const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';


// ACTIONS

export const loadEmployees = employees => {
    return {
        type: LOAD_EMPLOYEES,
        payload: employees,
    }
};

export const addNewEmployee = newEmployee => {
    return {
        type: ADD_EMPLOYEE,
        payload: newEmployee
    }
}

//THUNKS

export const getEmployees = () => async (dispatch) => {
    const res = await fetch('/api/employees/');
    const data = await res.json();
    if (res.ok) {
        dispatch(loadEmployees(data.employees));
        return res;
    }
}

export const addEmployee = (payload) => async (dispatch) => {
    const res = await fetch('/api/employees/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    // console.log(data)

    if (res.ok) {
        dispatch(addNewEmployee(data));
    } else return data;
}

const initialState = {};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_EMPLOYEES: {
            const newState = {};
            action.payload.forEach((employee) => {
                newState[employee.id] = employee;
            })
            return newState;
        }


        case ADD_EMPLOYEE: {
            const newEmployee = Object.assign({}, state);
            newEmployee[action.payload.id] = action.payload
            return newEmployee;
        }

        default: {
            return state;
        }

    }


};

export default employeeReducer;