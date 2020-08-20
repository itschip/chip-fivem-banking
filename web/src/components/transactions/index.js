// REACT
import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import NavButton from "../ui/ui";


import Nui from "../../util/Nui";

import { ChildScreen } from "../screen/screen";

const columns = [
  { id: 'type', label: 'Type', minWidth: 170 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
  },
];


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    width: "94%",
    backgroundColor: "#2d3436",
    margin: 20,
    color: "#fff",
  },
    table: {
        width: "100%",
        color: "#fff"
    },
  cell: {
      color: "#fff"
  },
  container: {
    maxHeight: 350,
  },
}));




function Transactions({ transactions }) {

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (  
        <ChildScreen>
          <NavButton link={"/"}>
            <ChevronLeftIcon/>
            Back
          </NavButton>
          <Paper className={classes.paper}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} className={classes.cell}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        className={classes.cell}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
          <Paper/>

          </Paper>
        </ChildScreen>
    )
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({transactions: state.transactions.transactions})

export default connect(mapStateToProps)(Transactions);

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
      {
        id: 4,
        type: "Uttak",
        amount: 1000,
        date: "12.04.2020",
      },
      {
        id: 5,
        type: "Uttak",
        amount: 400,
        date: "04.01.2020",
      },
      {
        id: 6,
        type: "Uttak",
        amount: 200,
        date: "23.09.2020",
      },
      {
        id: 7,
        type: "Uttak",
        amount: 1000,
        date: "12.04.2020",
      },
      {
        id: 8,
        type: "Uttak",
        amount: 400,
        date: "04.01.2020",
      },
      {
        id: 9,
        type: "Uttak",
        amount: 200,
        date: "23.09.2020",
      },
      {
        id: 10,
        type: "Uttak",
        amount: 1000,
        date: "12.04.2020",
      },
      {
        id: 11,
        type: "Uttak",
        amount: 400,
        date: "04.01.2020",
      },
      {
        id: 12,
        type: "Uttak",
        amount: 200,
        date: "23.09.2020",
      },
      {
        id: 13,
        type: "Uttak",
        amount: 1000,
        date: "12.04.2020",
      },
      {
        id: 14,
        type: "Uttak",
        amount: 400,
        date: "04.01.2020",
      },
      {
        id: 15,
        type: "Uttak",
        amount: 200,
        date: "23.09.2020",
      },
    ],
  });
}, 100)