import React from 'react';
import Container from './components/container/Container';
import { ThemeProvider } from '@material-ui/core';
import { useTheme } from './theme/useTheme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/components/Home';

// nui stuff
import { useVisibility } from './context/BankProvider';
import { useNuiService } from './utils/hooks/useNuiService';
import { useNuiEvent } from './utils/hooks/useNuiEvent';

function Bank() {
  useNuiService();
  const currentTheme = useTheme();
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

  setTimeout(() => {
    window.dispatchEvent(
      new MessageEvent('message', {
        data: {
          app: 'NBWD',
          method: 'setTransactions',
          data: [
            {
              id: 1,
              type: 'deposit',
              amount: 200,
              date: 'just now',
            },
            {
              id: 2,
              type: 'withdraw',
              amount: 200,
              date: 'just now',
            },
          ],
        },
      }),
    );
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        {visibility ? (
          <Container>
            <Router>
              <>
                <Switch>
                  <Route path="/" exact component={Home} />
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
