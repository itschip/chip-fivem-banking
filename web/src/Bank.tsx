import React from 'react';
import Container from './components/Container/Container';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/components/Home';
import Header from './components/Header/Header';
// nui stuff
import { useVisibility } from './context/BankProvider';
import { useTheme } from './theme/useTheme';

function Bank() {
  const { visibility } = useVisibility();
  const currentTheme = useTheme();

  setTimeout(() => {
    window.dispatchEvent(
      new MessageEvent('message', {
        data: {
          app: 'NBWD',
          method: 'setVisibility',
          data: true,
        },
      }),
    );
  }, 1000);

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        {visibility ? (
          <Container>
            <Router>
              <Header />
              <>
                <Switch>
                  <Route path='/' exact component={Home} />
                </Switch>
              </>
            </Router>
          </Container>
        ) : null}
      </div>
    </ThemeProvider>
  );
}

export default Bank;
