const ADD_CUSTOMER = 'ADD_CUSTOMER'
const LOAD_CUSTOMERS = 'LOAD_CUSTOMERS';


// ACTIONS

export const loadCustomers = customers => {
  return {
    type: LOAD_CUSTOMERS,
    payload: customers,
  }
};

export const addNewCustomer = newCustomer => {
    return {
      type: ADD_CUSTOMER,
      payload: newCustomer
    }
  }

  //THUNKS

export const getCustomers = () => async (dispatch) => {
  const res = await fetch('/api/customers/');
  const data = await res.json();
  if (res.ok) {
    dispatch(loadCustomers(data.customers));
    return res;
  }
}
  
  export const addCustomer = (payload) => async (dispatch) => {

    const res = await fetch('/api/customers/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
      
    } )
    

    const data = await res.json();
    // console.log(data)

    if (res.ok) {
      dispatch(addNewCustomer(data));
  
  
    } else return data  
  
    
    
    
  
  
  }

const initialState = {};



const customerReducer = (state = initialState, action) => {


    switch (action.type) {
        case LOAD_CUSTOMERS: {
            const newState = {};
            action.payload.forEach((customer) => {
            newState[customer.id] = customer;
        })
            return newState;
      }

        case ADD_CUSTOMER: {
            const newCustomer = Object.assign({}, state);
            newCustomer[action.payload.id] = action.payload
            return newCustomer;


        }

        default: {
            return state;
        }

  }

  
  };

  export default customerReducer




  