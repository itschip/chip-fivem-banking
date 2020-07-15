import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Screen } from "../../components/screen/screen";
import HeaderComponent from "../../components/header"
import Home from "../../components/home"
import Deposit from "../../components/functions/deposit"
import { makeStyles } from '@material-ui/core/styles';
import Withdraw from "../../components/functions/withdraw";
import Transactions from "../../components/transactions/index";
import Transfer from "../../components/functions/transfer";
import Alert from '@material-ui/lab/Alert';

import styled from 'styled-components';

import GlobalStyle from '../../globalStyles';

const Container = styled('div')`

  visibility: ${props => props.hidden};
`;

const useStyles = makeStyles(theme => ({
  alert: {
    width: "40%",
    left: "50%",
    transform: "translate(-50%, 30%)",
    margin: "auto",
    position: "absolute",
    zIndex: 2000,
  }
}));


function App({ hidden, alert, message }) {

  const classes = useStyles();

  const AlertMessage = () => (
      <Alert variant="filled" severity={alert} className={classes.alert}>
        {message}
      </Alert>
  )

  return (
  <div>
    <Container hidden={hidden}>
      <Screen>
      <AlertMessage/>
        <Router>
          <div>
          <HeaderComponent />
          
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/deposit"} component={Deposit} />
            <Route path={"/withdraw"} component={Withdraw} />
            <Route path={"/transactions"} component={Transactions} />
            <Route path={"/transfer"} component={Transfer} />
          </Switch>
          <Redirect to={'/'}/>
          </div>
        </Router>
      </Screen>
    </Container>
  </div>
  )
}

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ hidden: state.app.hidden, alert: state.app.alert, message: state.app.message });

export default connect(mapStateToProps)(App);
