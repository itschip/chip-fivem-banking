import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';
import headerReducer from './components/header/reducer';
import homeReducer from "./components/home/reducer";
import transactionsReducer from "./components/transactions/reducer";

export default () =>
  combineReducers({
    app: appReducer,
    header: headerReducer,
    home: homeReducer,
    transactions: transactionsReducer,
  });
