import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Date from './Date';
import './BlogPost.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 1),
        backgroundColor: '#F9F9F9',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '-10px',
        
    
    },
    paper: {
        maxWidth: 1122,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(3),
    },
    message: {
        fontSize: '12px',
    }

}));



export default function AutoGridNoWrap({ date, month, tittle, message, blink1, blink2, blink3, blink4, slink1, slink2, slink3 }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={1}>
                    <Grid item xs>
                        <Date  date={date} month={month} tittle={tittle}/>
                        <p wrap className={classes.message}>{message}</p>
                        <span className='linkes'>
                            <a href='#' >{blink1} </a>
                            <a href='#'> {blink2} </a>
                            <a href='#'> {blink3} </a>
                            <a href='#'> {blink4} </a>
                        </span>
                        <br />
                        <span className='small__linkes'>
                            <a href='#' >{slink1} </a>
                            <a href='#'> {slink2} </a>
                            <a href='#'> {slink3} </a>
                        </span>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
