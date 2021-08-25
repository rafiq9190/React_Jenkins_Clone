import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BlogPost from './BlogPost';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 1),
        backgroundColor: '#F9F9F9',
        marginLeft: '22px',
        marginRight: '22px',
        borderTop: '1px solid gray',
    },
    blog: {
        fontSize: '22px',
        marginLeft: '20px',
        marginTop: '30px',
        fontWeight: '500',

    }
}));

export default function FullWidthGrid(
    { 
    date, month, tittle, message, blink1, blink2, blink3, blink4, slink1, slink2, slink3 
    }) 
    {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <p className={classes.blog}>Recent Blog Post</p>
                </Grid>
                <Grid item xs={12}>
                    <BlogPost 
                        month='Jun'
                        date='21'  
                        tittle="Four students and their master project in Jenkins security" 
                        message="Jenkins is a CI/CD solution and as such, it is critical that the open source plugins that constitute an integral part of it don’t expose the systems they are used on to any security risks and vulnerabilities. It is in that context that we worked as an audit/code review team to track and report such flaws and problematic practices."
                        blink1="Justin Philip ,"
                        blink2="Quentin Parra ," 
                        blink3="Kevin Guerroudj ,"
                        blink4="Marc Heyries ,"
                        slink1="plugins" 
                        slink2="security" 
                        slink3="jenkins"
                        />
                </Grid>
                <Grid item xs={12}>
                    <BlogPost
                        month='Jun'
                        date='17'
                        tittle="Jenkins IRC moves to Libera Chat"
                        message="We are happy to announce that the Jenkins community has moved all its official IRC channels to Libera chat. We have started our migration on May 26 as a response to the hostile takeover of hundreds of open source community channel by the new Freenode management. As decided by the Jenkins governance meeting on June 16th, Libera Chat IRC channels are the only official channels going forward."
                        blink1="Mark Waite ,"
                        blink2="Oleg Nenashev ,"
                        slink1="community ,"
                        slink2="announcement"
                        slink3="chat"
                    />
                </Grid>

                <Grid item xs={12}>
                    <BlogPost
                        month='Jun'
                        date='10'
                        tittle="New eBook: Jenkins is the Way for IT and software developers"
                        message="A little over a year ago, we launched JenkinsIsTheWay.io, a website whose sole purpose is to share Jenkins user stories with the developers and engineers in our community. Over a hundred of you have already shared your innovations, and they just keep coming. It comes as no surprise that many of the submitted stories are from IT consultants and software developers around the world building next-generation DevOps and CI/CD platforms to fuel the modernization of enterprise companies far and wide."
                        blink1="Alyssa Tong"
                        slink1="jenkins-is-the-way"
                        slink2="case-study"
                        slink3="ebook"
                    />
                </Grid>

                <Grid item xs={12}>
                    <BlogPost
                        month='May'
                        date='20'
                        tittle="Configure Plugins with JCasC"
                        message="Jenkins is a CI/CD solution and as such, it is critical that the open source plugins that constitute an integral part of it don’t expose the systems they are used on to any security risks and vulnerabilities. It is in that context that we worked as an audit/code review team to track and report such flaws and problematic practices."
                        blink1="Dheeraj Singh Jpdha"
                        slink1="plugins"
                        slink2="tutorial"
                        slink3="yaml"
                    />
                </Grid>
                <Grid item xs={12}>
                    <BlogPost
                        month='Apr'
                        date='07'
                        tittle="Welcome the She Code Africa Contributhon participants!"
                        message="We are happy to announce that the Jenkins community has moved all its official IRC channels to Libera chat. We have started our migration on May 26 as a response to the hostile takeover of hundreds of open source community channel by the new Freenode management. As decided by the Jenkins governance meeting on June 16th, Libera Chat IRC channels are the only official channels going forward."
                        blink1="Mark Waite"
                        slink1="community ,"
                        slink2="events"
                        slink3="documentation"
                    />
                </Grid>

                <Grid item xs={12}>
                    <BlogPost
                        month='Mar'
                        date='22'
                        tittle="Welcome Ewelina Wikosz - new Jenkins Governance Board member"
                        message="This blog post is for anyone interested to know how to configure a plugin using the Jenkins Configuration as a Code (JCasC) plugin, more specifically, this blog will guide you to get the YAML equivalent of a plugin’s configuration and use it to do some changes to the plugin without using the Jenkins UI."
                        blink1="Oleg Nenashev"
                        slink1="community"
                        slink2="governance"
                        slink3="governance-board"
                    />
                </Grid>

            </Grid>
        </div>
    );
}
