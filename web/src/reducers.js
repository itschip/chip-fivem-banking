import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';
import headerReducer from './components/header/reducer';
import homeReducer from "./components/home/reducer";
import transactionsReducer from "./components/transactions/reducer";
import functionReducer from './components/functions/reducer';

export default () =>
  combineReducers({
    app: appReducer,
    header: headerReducer,
    home: homeReducer,
    transactions: transactionsReducer,
    functions: functionReducer
  });
