const ADD_CONTACT = 'ADD_CONTACT'

// ACTIONS

export const addNewContact = newContact => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}

//THUNKS

export const addContact = (payload) => async (dispatch) => {

    const res = await fetch('/api/contacts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)

    })


    const data = await res.json();
    // console.log(data)

    if (res.ok) {
        dispatch(addNewContact(data));


    } else return data






}

const initialState = {};



const contactReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_CONTACT: {
            const newContact = Object.assign({}, state);
            newContact[action.payload.id] = action.payload
            return newContact;


        }

        default: {
            return state;
        }

    }


};

export default contactReducer




