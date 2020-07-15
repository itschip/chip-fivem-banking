import React from "react";

import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';




const Input = styled('input')`
  text-align: center;
  padding: 10px;
  border: none;
  font-size: 20px;
  outline: none;
  background: transparent;
  color: #fff;
  margin-bottom: 1em;
  border-bottom: 1px solid #fff;
`;


const TextInput = (props) => (
    <Input 
        placeholder={props.placeholder}
        type={props.type}
        defaultValue={props.value}
        onChange={props.onChange}
    />
)


const useStyles = makeStyles(theme => ({
  margin: {
    margin: 20,
  },
}));

export default function NavButton(props) {
  const classes = useStyles();

  return (
    <NavLink className={classes.margin} to={props.link} style={{ textDecoration: 'none', color: "rgba(0, 0, 0, 0.87)" }}>
      <Button variant="contained">{props.children}</Button>
    </NavLink>
  );
}

export {TextInput}