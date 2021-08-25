import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Footer.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(6),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        backgroundColor: '#1077AD',
        fontSize: '12px',
        color: 'white',
    },


}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs>
                    <span>
                        <a href="#">Improve this page</a> | 
                        <a href="#"> Report a problem</a>
                    </span> 
                    <br /><br />
                    <img src='https://licensebuttons.net/l/by-sa/4.0/88x31.png' alt='' /> <br /><br />
                    <p>The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
                </Grid>
                <Grid item xs>
                    <b> ________________________________________</b> <br />
                    
                        <b><span>Resources</span></b><br />
                        <a href='#' className='footer__part2'><span>Downloads</span></a> <br />
                        <a href='#' className='footer__part2'><span>Blog</span></a><br />
                        <a href='#' className='footer__part2'><span>Documentation</span></a><br />
                        <a href='#' className='footer__part2'><span>Plugins</span></a><br />
                        <a href='#' className='footer__part2'><span>Security</span></a><br />
                        <a href='#' className='footer__part2'><span>Contributing</span></a>
                
                </Grid>
                <Grid item xs>
                    <b> __________________________________________</b> <br />

                    <b><span>Project</span></b><br />
                    <a href='#' className='footer__part2'><span>Structure and governance</span></a> <br />
                    <a href='#' className='footer__part2'><span>Issue tracker</span></a><br />
                    <a href='#' className='footer__part2'><span>Roadmap</span></a><br />
                    <a href='#' className='footer__part2'><span>GitHub</span></a><br />
                    <a href='#' className='footer__part2'><span>Jenkins on Jenkins</span></a>

                </Grid>
                <Grid item xs>
                    <b> ________________________________________</b> <br />

                    <b><span>Community</span></b><br />
                    <a href='#' className='footer__part2'><span>Events</span></a> <br />
                    <a href='#' className='footer__part2'><span>Mailing lists</span></a><br />
                    <a href='#' className='footer__part2'><span>Chats</span></a><br />
                    <a href='#' className='footer__part2'><span>Special Interest Groups</span></a><br />
                    <a href='#' className='footer__part2'><span>Twitter</span></a><br />
                    <a href='#' className='footer__part2'><span>Reddit</span></a>

                </Grid>
                <Grid item xs>
                    <b> ________________________________________</b> <br />

                    <b><span>Other</span></b><br />
                    <a href='#' className='footer__part2'><span>Code of Conduct</span></a> <br />
                    <a href='#' className='footer__part2'><span>Press information</span></a><br />
                    <a href='#' className='footer__part2'><span>Merchandise</span></a><br />
                    <a href='#' className='footer__part2'><span>Artwork</span></a><br />
                    <a href='#' className='footer__part2'><span>Awards</span></a>


                </Grid>
            </Grid>

        </div>
    );
}
