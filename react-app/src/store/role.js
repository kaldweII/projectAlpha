const ADD_ROLE = 'ADD_ROLE'

// ACTIONS

export const addNewRole = newRole => {
    return {
        type: ADD_ROLE,
        payload: newRole
    }
}

//THUNKS

export const addRole = (payload) => async (dispatch) => {
    const res = await fetch('/api/roles/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    // console.log(data)

    if (res.ok) {
        dispatch(addNewRole(data));
    } else return data;
}

const initialState = {};

const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROLE: {
            const newRole = Object.assign({}, state);
            newRole[action.payload.id] = action.payload
            return newRole;
        }

        default: {
            return state;
        }

    }


};

export default roleReducer;