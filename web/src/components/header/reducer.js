export const initialState = {
    header: [],
  };
  
  const headerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RECIEVE_BANK':
        return Object.assign({}, state, {
          header: action.payload.header,
        });
      default:
        return state;
    }
  };
  
  export default headerReducer;
  