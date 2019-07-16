import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        height: '50%',
        width: '50%',
        maxHeight: '100%',// 16:9
        maxWidth: '100%' 
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const projectList = [
    {
        photos: [],
        heading: 'Netflix Clone',
        content: 'React UI cloning the Netflix app'

    },
    {
        photos: [],
        heading: 'Time Management',
        content: 'An Mobile Application that can manage your tasks for each day of the week'
    },
    {
        photos: [],
        heading: 'Ocasio\'s Pools & Spa',
        content: 'A landing page for a Superb Local Pool cleaning service in San Antonio, TX'
    },
    {
        photos: [],
        heading: 'Artible City',
        content: 'Co-Founder of Artible City , created static web site landing page for not yet release mobile application'
    },
    {
        photos:[],
        heading: 'Artible Mobile application',
        content: 'Co-Founder of Artible City , not yet released mobile application for bring your local art community together'
    }
];

export default function Projects() {
    const classes = useStyles();

    return (
        <React.Fragment >
            <CssBaseline />
            <main>
                <Container id='workSection' className={classes.cardGrid} maxWidth="md">
                <h1 style={{ fontFamily: 'Raleway', width: '100%' }}>Projects</h1>
                <h1 className="hr" >{}</h1>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {projectList.map((card,index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="/src/assets/images/timemgmt.png"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.heading}
                                        </Typography>
                                        <Typography>
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View Source
                    </Button>
                                        <Button size="small" color="primary">
                                            View Live
                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}