import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bank from './Bank';
import reportWebVitals from './reportWebVitals';
import BankProvider from './context/BankProvider';
import { SnackbarProvider } from 'notistack';
import { NuiProvider } from 'fivem-nui-react-lib';

ReactDOM.render(
  <React.StrictMode>
    <NuiProvider resource='new-bank-who-dis'>
      <BankProvider>
        <SnackbarProvider>
          <Bank />
        </SnackbarProvider>
      </BankProvider>
    </NuiProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
