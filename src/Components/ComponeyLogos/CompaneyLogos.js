import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './ComponeyLogos.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '30px',
        marginLeft: '30px',
        marginRight: '30px',
    },

}));

export default function CompaneyLogos() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <img width='150px' src="https://awsmp-logos.s3.amazonaws.com/1b0cc589-2e4d-4f4b-8f74-77c0a033b82a/ccc2cf804b36627c0665cae149207da7.png" alt="" />
                </Grid>
                <Grid item xs>
                    <img width='250px' src="https://osuosl.org/images/osllogo-print_0.png" alt="" />
                </Grid>
                <Grid item xs>
                    <img width='180px' src="https://devclass.com/wp-content/uploads/2019/07/cd_foundation_logo.png" alt="" />
                </Grid>
                <Grid item xs>
                    <img width='200px' src="https://www.itopstimes.com/wp-content/uploads/2020/04/red-hat-logo-b-sample_1.png" alt="" />
                </Grid>
                <Grid item xs>
                    <img width='250px' src="https://internet2.edu/wp-content/uploads/2020/06/aws-larger-logo.png" alt="" />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <img width='250' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/2560px-GitHub_logo_2013.svg.png" alt="" />
                </Grid>
                <Grid item xs>
                    <img width='300px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXFUTyP3KEiQl2xYTCGGy-oVUNPKg74oG1nUglLjWh5YPkH2wPGOU8wmGzSuxu0URccE&usqp=CAU" alt="" />
                </Grid>
            </Grid>
            <span className='texts'><b>We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</b></span>
            <div className='categories'>
                <ul>
                    <a href='#' className='categories'><li>Atlassian</li></a>
                    <a href='#' className='categories'><li>Datadog</li></a>
                    <a href='#' className='categories'><li>Mac Cloud</li></a>
                    <a href='#' className='categories'><li>PagerDuty</li></a>
                    <a href='#' className='categories'><li>Sentry</li></a>
                    <a href='#' className='categories'><li>XMission</li></a>
                    <a href='#' className='categories'><li>Tsinghua University</li></a>
                    <a href='#' className='categories'><li>Fastly</li></a>
                    <a href='#' className='categories'><li>SpinUP</li></a>
                    <a href='#' className='categories'><li>IBM</li></a>
                </ul>

            </div>


        </div>
    );
}
