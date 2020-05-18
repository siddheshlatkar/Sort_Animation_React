import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./Array.module.css";
import {add, selectInputArray, swap} from '../inputArray/InputArraySlice'
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";

export function Array() {
    const array = useSelector(selectInputArray);
    const dispatch = useDispatch();
    
    return (
        <div>
            <Grid container justify="center" spacing={2} alignItems={"flex-end"}>
                {array.map((itm, i) => (
                    <Grid key={i} item>
                        <Paper className={styles.itm}
                        style={{height: itm.number * 10 > 50 ? itm.number * 10 : 50, backgroundColor: itm.color}}
                        elevation={3}>
                            <div className={styles.itmtext}>{itm.number}</div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
