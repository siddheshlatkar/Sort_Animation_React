import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import styles from './InputArray.module.css';

import {add, selectInputArray} from './InputArraySlice';

export function InputArray() {
    const inputArray = useSelector(selectInputArray);
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);

    const handleAdd = () => {
        dispatch(add(number));
        setNumber(0);
    };

    const handleChange = (e) => {
        if (!isNaN(e.target.value))
            setNumber(e.target.value);
    }

    return (
        <div>
            <Grid container justify="center" spacing={2}>
                {inputArray.map((value, i) => (
                    <Grid key={i} item>
                        <Paper className={styles.paper} elevation={3}>{value}</Paper>
                    </Grid>
                ))}
                <Grid container className={styles.input} justify="center" spacing={2} style={{marginTop: 10}}>
                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            className={styles.textfield}
                            label="Add Element"
                            variant="outlined"
                            value={number}
                            onChange={handleChange}/>
                    </Grid>
                    <Grid item>
                        <Button className={styles.button} variant="contained" color="primary" onClick={handleAdd}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}
