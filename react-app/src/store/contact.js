const ADD_CONTACT = 'ADD_CONTACT'
const LOAD_CONTACTS = 'LOAD_CONTACTS';



// ACTIONS

export const loadContacts = contacts => {
    return {
        type: LOAD_CONTACTS,
        payload: contacts,
    }
};


export const addNewContact = newContact => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}

//THUNKS

export const getContacts = () => async (dispatch) => {
    const res = await fetch('/api/contacts/');
    const data = await res.json();
    if (res.ok) {
        dispatch(loadContacts(data.contacts));
        return res;
    }
}



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

        case LOAD_CONTACTS: {
            const newState = {};
            action.payload.forEach((contact) => {
                newState[contact.id] = contact;
            })
            return newState;
        }


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




