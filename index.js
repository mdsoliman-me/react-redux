const { createStore } = require("redux")


const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
// const ADD_USER = "ADD_USER"



// State 
const initialCounterState = {
    count: 0,
}
const initialUserState = {
    users: [{ name: "Soliman" }],
}



// Action -> Object -> type , Payload 
//   INCREMENT COUNTER 
const incrementCounter = () => {
    return {
        type: INCREMENT,
        payload: { name: "SHAkl" }

    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT

    }
}


// const addUser = () => {
//     return {
//         type: DECREMENT

//     }
// }
// Create Deducer for counter app
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count -1
                    
            }
        default:
            state;
    }
}

// incrementCounterAction()
//   DECREMENT COUNTER

// 1. State
// 2. dispatch -> Action
// 2.1 reducer
// 3. update store ->{ getState(), despatch(), subscribe()}

// Create Store 
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

// Despatch Action 
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())