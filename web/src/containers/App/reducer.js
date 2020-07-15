export const initialState = {
  hidden: true,
  alert: '',
  message: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_SHOW':
      return Object.assign({}, state, { hidden: false });
    case 'APP_HIDE':
      return Object.assign({}, state, { hidden: true });
    case 'SEND_ALERT':
      return Object.assign({}, state, {
        alert: action.payload.alert,
        message: action.payload.message
      });
    default:
      return state;
  }
};

export default appReducer;
