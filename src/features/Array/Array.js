import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./Array.module.css";
import {add, selectInputArray, nextSwap, selectI, selectJ} from '../inputArray/InputArraySlice'
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";

export function Array() {
    const array = useSelector(selectInputArray);
    const i = useSelector(selectI);
    const j = useSelector(selectJ);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(nextSwap());
    };

    useEffect(() => {
        const timer = setTimeout(() => dispatch(nextSwap()), 1000);
        return () => clearTimeout(timer);
    });

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
                {/*<Grid item>*/}
                {/*    <Button className={styles.button} variant="contained" color="primary" onClick={handleAdd}>*/}
                {/*        Add*/}
                {/*    </Button>*/}
                {/*</Grid>*/}

            </Grid>
            <Grid container justify={"center"} spacing={2} alignItems={"flex-end"}>
                {array.map((itm, index) => (
                        <Grid key={index} item>
                            <Paper className={styles.ij} elevation={0}>
                                {index == i ? "i" : ""}
                                {index == j ? "j" : ""}
                            </Paper>
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    );
}
