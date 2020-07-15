import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Roboto from "../../fonts/Roboto.ttf";

import styled from "styled-components"

import Header from "./functions";
import Nui from '../../util/Nui';

const BankContainer = styled('div')`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }
  font-family: Roboto;
`;
 
function HeaderComponent({ header }) {  
  const closeBank = () => {
    Nui.send('closeBank');
  };

    return (
      <BankContainer>
      <ul>
        {header.map(c => (
          <Header key={c.id} {...c} onClose={closeBank}/>
        ))}
      </ul>
      </BankContainer>  
    );
}

HeaderComponent.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  header: state.header.header
});

export default connect(mapStateToProps)(HeaderComponent);

/// #if DEBUG

// Emulate a client event during local testing.

setTimeout(() => {
  Nui.emulate('RECIEVE_BANK', {
    header: [
      {
        id: 1,
        name: 'Joe Bloggs',
        surname: 'Bloggs',
        balance: 1000,
      },
    ],
  });
}, 100);

/// #endif
