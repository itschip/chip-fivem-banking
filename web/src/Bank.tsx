import React from 'react';
import Container from './components/container/Container';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/components/Home';

// nui stuff
import { useVisibility } from './context/BankProvider';

function Bank() {
  const { visibility } = useVisibility();

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
    <div>
      {visibility ? (
        <Container>
          <Router>
            <>
              <Switch>
                <Route path='/' exact component={Home} />
              </Switch>
            </>
          </Router>
        </Container>
      ) : null}
    </div>
  );
}

export default Bank;
