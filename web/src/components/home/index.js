// REACT
import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// MATERIAL
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

// OTHER
import styled from "styled-components";
import Roboto from "../../fonts/Roboto.ttf";
import NavButton from "../ui/ui";

import Nui from '../../util/Nui';

const HomeContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em 0;
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto});
      }
    font-family: Roboto;
`;


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: "#2d3436",
        margin: 20,
        color: "#fff",
      },
      options: {
        margin: 10,
      },
      link: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)"
      },
      table: {
        width: "100%",
        color: "#fff"
    },
    cell: {
        color: "#fff"
    },
    container: {
      maxHeight: 280,
      overflow: "hidden"
    },
}));


function Home({ transactions }) {

    const classes = useStyles();

    return (
        <HomeContainer>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <NavButton link={"/deposit"}>Deposit</NavButton>
                        <NavButton link={"/withdraw"}>Withdraw</NavButton>
                        <NavButton link={"/transfer"}>Transfer</NavButton>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography>
                        “Never spend your money before you have earned it.” —Thomas Jefferson
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <Typography>See all transactions and other dumb purchases.</Typography>
                        <br></br>
                        <NavButton link={"/transactions"}>Transactions</NavButton>
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                      <Typography>Your latest transactions</Typography>
                    <TableContainer className={classes.container}>
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell className={classes.cell}>Type</TableCell>
                              <TableCell align="left" className={classes.cell}>Amount</TableCell>
                              <TableCell align="left" className={classes.cell}>Date</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {transactions.map(row => (
                              <TableRow key={row.id}>
                                <TableCell component="th" scope="row" className={classes.cell}>
                                  {row.type}
                                </TableCell>
                                <TableCell align="left" className={classes.cell}>{row.amount}</TableCell>
                                <TableCell align="left" className={classes.cell}>{row.date}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </HomeContainer>
    )
}


Home.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({ transactions: state.transactions.transactions })

export default connect(mapStateToProps)(Home)

setTimeout(() => {
  Nui.emulate('RECIEVE_TRANSACTIONS', {
    transactions: [
      {
        id: 1,
        type: "Uttak",
        amount: 1000,
        date: "12.04.2020",
      },
      {
        id: 2,
        type: "Uttak",
        amount: 400,
        date: "04.01.2020",
      },
      {
        id: 3,
        type: "Uttak",
        amount: 200,
        date: "23.09.2020",
      },
    ],
  });
}, 100)