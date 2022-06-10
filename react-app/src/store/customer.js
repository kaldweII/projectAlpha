const ADD_CUSTOMER = 'ADD_CUSTOMER'

// ACTIONS

export const addNewCustomer = newCustomer => {
    return {
      type: ADD_CUSTOMER,
      payload: newCustomer
    }
  }

  //THUNKS
  
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

  

  const customerReducer = (state = {}, action) =>{

    switch (action.type) {
        case ADD_CUSTOMER: {
            const newCustomer = {...state};
            newCustomer[action.newCustomer.id] = action.newCustomer
            return newCustomer;


        }

        default: {
            return state;
        }

  }

  
  };

  export default customerReducer




  