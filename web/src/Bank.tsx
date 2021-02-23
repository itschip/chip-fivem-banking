import React from 'react';
import Container from './components/container/Container';
import { ThemeProvider } from '@material-ui/core';
import { useTheme } from './theme/useTheme';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/components/Home';
import { useVisibility } from './context/useBank';

function Bank() {
  const currentTheme = useTheme();

  const { visibility } = useVisibility()

  return (
    <ThemeProvider theme={currentTheme}>
      {visibility ? (
      <Container>
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </>
        </Router>
      </Container>
      ) : null}
    </ThemeProvider>
  );
}

export default Bank;
