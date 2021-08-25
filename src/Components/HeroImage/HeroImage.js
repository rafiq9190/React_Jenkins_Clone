import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './HeroImage.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        textAlign: 'center',
    },
    btn: {
        marginRight: theme.spacing(2),
        // textAlign: 'right',
        float: 'left',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" alt="" width="200" className='image1' />
                    
                </Grid>
                <Grid item xs>
                        <p className='heading1'>Jenkins</p>
                        <p className='heading2'><b>Build great things at any scale</b></p>
                        <p className='heading3'>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.</p>
                    <Button variant="contained" className={classes.btn}>Documentation</Button>
                    <Button variant="contained" color="secondary" className={classes.btn}>Download</Button>
                </Grid>
            </Grid>
        </div>
    );
}




