import React, { useState } from "react";

import { ChildScreen } from "../screen/screen";
import Nui from "../../util/Nui";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NavButton from "../ui/ui";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import moment from "moment";
import { TextInput } from "../ui/ui";


const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      backgroundColor: '#2d3436',
      margin: 20,
      marginTop: 50,
      color: '#fff',
    },
    back: {
      float: 'right',
      marginLeft: 20,
    },
  }));

export default function Transfer() {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    
    const handleTransfer = (e) => {
        console.log("Value " + value)
        console.log("Name " + name)
        console.log("Date " + date)
        Nui.send('transferAmount', {
            value,
            name,
            date
        });
    }

    const date = moment().format('DD.MM.YYYY');

    const classes = useStyles();

    return (
        <ChildScreen>
            <NavButton link={"/"} className={classes.back}>
                <ChevronLeftIcon/>
                Back
            </NavButton>
            <Paper className={classes.paper}>
                <Typography>Transfer money</Typography>
                <TextInput 
                    placeholder="ID" 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                <TextInput 
                    placeholder="$0" 
                    type="number" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <br></br>
                <Button variant="contained" onClick={handleTransfer}>
                  Confirm
                </Button>
            </Paper>
        </ChildScreen>
    )

}