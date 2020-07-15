import React from "react";
import styled from "styled-components";

import Roboto from "../../fonts/Roboto.ttf"

const BankContainer = styled('div')`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 600px;
    background: #232323;
`;

const ChildContainer = styled('div')`
    padding: 6em 0;
    @font-face {
      font-family: 'Roboto';
      src: url(${Roboto});
    }
    font-family: Roboto;
`;

const Screen = (props) =>  (
    <BankContainer>
        {props.children}
    </BankContainer>
)

const ChildScreen = (props) => (
    <ChildContainer>
        {props.children}
    </ChildContainer>
)


export { Screen, ChildScreen };