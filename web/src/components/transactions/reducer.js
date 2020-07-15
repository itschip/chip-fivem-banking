export const initialState = {
    transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIEVE_TRANSACTIONS':
            return Object.assign({}, state, {
                transactions: action.payload.transactions,
            });
        default:
            return state;
    }
}

export default transactionsReducer;