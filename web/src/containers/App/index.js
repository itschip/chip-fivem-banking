import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Screen } from "../../components/screen/screen";
import HeaderComponent from "../../components/header"
import Home from "../../components/home"
import Deposit from "../../components/functions/deposit"
import Withdraw from "../../components/functions/withdraw";
import Transactions from "../../components/transactions/index";
import Transfer from "../../components/functions/transfer";

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const Container = styled('div')`

  visibility: ${props => props.hidden};
`;




function App({ hidden }) {
  
  return (
  <div>
    <Container hidden={hidden}>
      <Screen>
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

const mapStateToProps = state => ({ hidden: state.app.hidden });

export default connect(mapStateToProps)(App);
