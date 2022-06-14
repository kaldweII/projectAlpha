const ADD_CONTRACT = 'ADD_CONTRACT'

// ACTIONS

export const addNewContract = newContract => {
    return {
        type: ADD_CONTRACT,
        payload: newContract
    }
}

//THUNKS

export const addContract = (payload) => async (dispatch) => {

    const res = await fetch('/api/contracts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });


    const data = await res.json();
    // console.log(data)

    if (res.ok) {
        dispatch(addNewContract(data));
    } else return data;
}

const initialState = {};

const contractReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTRACT: {
            const newContract = Object.assign({}, state);
            newContract[action.payload.id] = action.payload
            return newContract;
        }

        default: {
            return state;
        }

    }


};

export default contractReducer;