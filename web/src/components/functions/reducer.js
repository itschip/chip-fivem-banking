export const initialState = {
    alert: '',
    message: ''
}

const functionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_ALERT':
            return Object.assign({}, state, {
                alert: action.payload.alert,
                message: action.payload.message
            });
        default:
            return state;
    }
}

export default functionReducer;