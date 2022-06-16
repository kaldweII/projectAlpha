const ADD_CONTRACT = 'ADD_CONTRACT'
const LOAD_CONTRACTS = 'LOAD_CONTRACTS';


// ACTIONS



export const loadContracts = contracts => {
    return {
        type: LOAD_CONTRACTS,
        payload: contracts,
    }
};

export const addNewContract = newContract => {
    return {
        type: ADD_CONTRACT,
        payload: newContract
    }
}

//THUNKS


export const getContracts = () => async (dispatch) => {
    const res = await fetch('/api/contracts/');
    const data = await res.json();
    if (res.ok) {
        dispatch(loadContracts(data.contracts));
        return res;
    }
}

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
        case LOAD_CONTRACTS: {
            const newState = {};
            action.payload.forEach((contract) => {
                newState[contract.id] = contract;
            })
            return newState;
        }

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