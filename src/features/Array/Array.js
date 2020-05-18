import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import styles from "./Array.module.css";

export function Array({array = [1, 2, 3, 40, 60, 20]}) {
    return (
        <div>
            <Grid container justify="center" spacing={2} alignItems={"flex-end"}>
                {array.map((itm, i) => (
                    <Grid key={i} item>
                        <Paper className={styles.itm}
                               style={{height: itm * 10 > 50 ? itm * 10 : 50, backgroundColor: "rgba(0, 0, 255, 0.5)"}}
                               elevation={3}>
                            <div className={styles.itmtext}>{itm}</div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

Array.propTypes = {
    array: PropTypes.array.isRequired,
};
