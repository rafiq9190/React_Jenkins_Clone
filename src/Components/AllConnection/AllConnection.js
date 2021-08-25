import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Connection from '../Connection/Connection';
import { FaDownload } from 'react-icons/fa';
import { GiPlug } from 'react-icons/gi';
import { MdExtension } from 'react-icons/md';
import { DiStreamline } from 'react-icons/di';
import { GoSettings } from 'react-icons/go';
import { AiOutlineInteraction } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),


    },

}));

export default function AllConnection({icon, heading, text}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs>
                    
                    <Connection 
                        icon={<AiOutlineInteraction />}
                        heading={'Continuous Integration and Continuous Delivery'}
                        text={'As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.'}
                        />
                    
                </Grid>
                <Grid item xs>
                    
                    <Connection
                        icon={<FaDownload />}
                        heading={'Easy installation'}
                        text={'Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.'}
                    />
                    
                </Grid>
                <Grid item xs>
                    
                    <Connection
                        icon={<GoSettings />}
                        heading={'Easy configuration'}
                        text={'Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.'}
                    />
                    
                </Grid>
            </Grid>

            <Grid container spacing={6}>
                <Grid item xs>

                    <Connection
                        icon={<GiPlug />}
                        heading={'Plugins'}
                        text={'With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.'}
                    />

                </Grid>
                <Grid item xs>
                    <Connection
                        icon={<MdExtension />}
                        heading={'Extensible'}
                        text={'Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.'}
                    />

                </Grid>
                <Grid item xs>
                    <Connection
                        icon={<DiStreamline />}
                        heading={'Distributed'}
                        text={'Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.'}
                    />

                </Grid>
            </Grid>
           
        </div>
    );
}

