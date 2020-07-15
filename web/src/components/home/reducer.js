export const initialState = {
    transactions: [],
};

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIEVE_TRANSACTIONS':
            return Object.assign({}, state, {
                transactions: action.payload.transactions,
            });
        default:
            return state;
    }
}

export default homeReducer;