import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

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
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    closeButton: {
        position: 'flex-end',
        color: theme.palette.grey[500]
    },
    cardMedia: {
        paddingTop: '65.25%', // 16:9
        justifyContent: 'center'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '50%'
    },
    paper: {
        position: 'absolute',
        height: '75%',
        width: '35%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
}))

export default function Projects() {
    const [isNetflixModalOpen, setNetflixModal] = useState(false)
    const [isTimeMgmtModalOpen, setTimeMgmtModal] = useState(false)
    const [isOcasioModalOpen, setOcasioModal] = useState(false)
    const [isArtibleWebModalOpen, setAritibleWebModal] = useState(false)
    // const [isArtibleMobileModalOpen, setArtibleMobileModal] = useState(false)

    const projectList = [
        {
            photo: [require('../assets/images/netflix/1.png'), require('../assets/images/netflix/2.png'), require('../assets/images/netflix/3.png')],
            heading: 'Netflix Clone',
            content: 'React UI cloning the Netflix app',
            description: 'Practice project using React and a Third party MovieDB to retrieve data and populate lists/scrollviews using the parsed data.',
            alt: 'netflix',
            modalOpen: isNetflixModalOpen,
            axis: 'horizontal',
            viewSource: true,
            viewLive: true,
            id: 'netflix'

        },
        {
            photo: [require('../assets/images/timemgmt.png'), require('../assets/images/timemgmt/1.png'), require('../assets/images/timemgmt/2.png'), require('../assets/images/timemgmt/3.png'), require('../assets/images/timemgmt/4.png'), require('../assets/images/timemgmt/5.png')],
            heading: 'Time Management',
            content: 'An Mobile Application that can manage your tasks for each day of the week',
            description: 'Mobile application used to track your daily tasks and can present your day in a pie chart diagram or present your week. Made for practice purposes on learning new front end framework Flutter by Google.',
            alt: 'time management',
            modalOpen: isTimeMgmtModalOpen,
            axis: 'vertical',
            viewSource: true,
            viewLive: false,
            id: 'timemgmt'
        },
        {
            photo: [require('../assets/images/ocasiospoolspa/1.png'),require('../assets/images/ocasiospoolspa/2.png'),require('../assets/images/ocasiospoolspa/3.png'),require('../assets/images/ocasiospoolspa/4.png'),require('../assets/images/ocasiospoolspa/5.png')],
            heading: 'Ocasio\'s Pools & Spa',
            content: 'A landing page for a Superb Local Pool cleaning service in San Antonio, TX',
            description: 'Ocasio\'s Pools & Spa is a local pool cleaning company in San Antonio, TX, that will have your pool sparkling. Website built with React, Express, Material UI, NodeJS. Features simple user flow and interaction.',
            alt: 'ocasio',
            modalOpen: isOcasioModalOpen,
            axis: 'horizontal',
            viewSource: false,
            viewLive: true,
            id: 'ocasio',
        },
        {
            photo: [require('../assets/images/artiblecity/1.png'), require('../assets/images/artiblecity/2.png')],
            heading: 'Artible City',
            content: 'Co-Founder of Artible City , created static web site landing page for not yet release mobile application',
            description: 'Artible City is a Independent Entertainment brand that enforces freedom as an independent artist. Web application was built using Pug/HTML,CSS,Javascript with a NodeJS server.',
            alt: 'Artible City',
            modalOpen: isArtibleWebModalOpen,
            axis: 'horizontal',
            viewSource: false,
            viewLive: true,
            id: 'artibleweb'
        },
        // {
        //     photo: [require('../assets/images/Artiblemobile.png'), require('../assets/images/netflix.png'), require('../assets/images/netflix.png')],
        //     heading: 'Artible City Mobile application',
        //     content: 'Co-Founder of Artible City , not yet released mobile application for bring your local art community together',
        //     description: 'Artible City is a Independent Entertainment brand that enforces freedom as an independent artist. Mobile application built with using React-Native, MongoDB,Express, NodeJS and features GPS tracking, maps, accounts and authenication and much more.',
        //     alt: 'Artible',
        //     modalOpen: isArtibleMobileModalOpen,
        //     axis: 'vertical',
        //     viewSource: false,
        //     viewLive: false,
        //     id: 'artiblemobile'
        // }
    ]


    function handleLearnMoreOpen(event) {
        switch (event.currentTarget.id) {
            case 'netflix':
                setNetflixModal(true)
                break
            case 'timemgmt':
                setTimeMgmtModal(true)
                break
            case 'ocasio':
                setOcasioModal(true)
                break
            case 'artibleweb':
                setAritibleWebModal(true)
                break
            // case 'artiblemobile':
            //     setArtibleMobileModal(true)
            //     break
            default:
        }
    }

    function handleLearnMoreClose(event) {
        switch (event.currentTarget.id) {
            case 'netflix':
                setNetflixModal(false)
                break
            case 'timemgmt':
                setTimeMgmtModal(false)
                break
            case 'ocasio':
                setOcasioModal(false)
                break
            case 'artibleweb':
                setAritibleWebModal(false)
                break
            // case 'artiblemobile':
            //     setArtibleMobileModal(false)
            //     break
            default:
        }
    }

    const classes = useStyles()

    const DialogContent = withStyles(theme => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiDialogContent)

    return (
        <React.Fragment >
            <CssBaseline />
            <main>
                <Container id='workSection' className={classes.cardGrid} maxWidth="md">
                    <h1 style={{ fontFamily: 'Raleway', width: '100%' }}>Projects</h1>
                    <h1 className="hr" >{}</h1>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {projectList.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.photo[0]}
                                        title={card.alt}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.heading}
                                        </Typography>
                                        <Typography>
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardContent className={classes.cardContent}>
                                        <img className={classes.cardMedia} src={card.photo} alt={card.alt} />
                                    </CardContent> */}
                                    <CardActions style={{ justifyContent: 'center' }}>
                                        <Button id={card.id} onClick={handleLearnMoreOpen} size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {
                    projectList.map((modal, index) => {
                        return (
                            <Dialog className={classes.card} key={index} onBackdropClick={handleLearnMoreClose} onClose={handleLearnMoreClose} aria-labelledby="customized-dialog-title" open={modal.modalOpen}  >
                                <DialogContent >
                                    <Carousel  dynamicHeight={false} infiniteLoop={true} autoPlay={true} swipeable={true} interval={3000} showThumbs={false} showIndicators={false} showStatus={false} showArrows={true}>
                                        {modal.photo.map((photo, index) => {
                                            return <div key={index}>
                                                <img src={photo} alt="" />
                                            </div>
                                        })}
                                    </Carousel>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '10%' }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {modal.heading}
                                        </Typography>
                                        <Typography>
                                            {modal.description}
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                        <div>
                                            {
                                                modal.viewSource === true &&
                                                <Button size="small" color="primary">
                                                    View Source
                                            </Button>
                                            }
                                            {
                                                modal.viewLive === true &&
                                                <Button size="small" color="primary">
                                                    View Live
                                            </Button>
                                            }
                                        </div>
                                        <div >
                                            <IconButton id={modal.id} onClick={handleLearnMoreClose} style={{ padding: 0 }}>
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        )
                    })
                }
            </main>
        </React.Fragment>

    )
}