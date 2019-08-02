import React, { Component } from 'react'
import { FaDatabase, FaUserTie, FaDesktop } from 'react-icons/fa'
import { Grid, Card, CardHeader, CardContent, Typography, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const tiers = [
    {
        title: 'User Experience',
        titleIcon: <FaUserTie style={{ height: 50, width: 50, marginTop: 10, marginBottom: 10 }} fontSize="large" ></FaUserTie>,
        description: ['User Stories', 'Wire Framing', 'Interface Design', 'Content Management', 'Usability and User Research', 'Adobe Photoshop']
    },
    {
        title: 'Front End',
        titleIcon: <FaDesktop style={{ height: 50, width: 50, marginTop: 10, marginBottom: 10 }} fontSize="large"></FaDesktop>,
        description: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'React-Native',
            'Flutter',
            'Redux',
            'Babel',
            'Webpack',
            'Responsive Design'            
        ],
    },
    {
        title: 'Back End',
        titleIcon: <FaDatabase style={{ height: 50, width: 50, marginTop: 10, marginBottom: 10 }} fontSize="large"></FaDatabase>,
        description: [
            'Node JS',
            'MongoDB',
            'Express JS',
            'Authenication',
            'Rest Endpoints'
        ]
    },
];

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#FFF',
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(900 + theme.spacing(3 * 2))]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing(2),
        },
    },
    footer: {
        marginTop: theme.spacing(8),
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing(6)}px 0`,
    },
});

class Skills extends Component {
    render() {
        const { classes } = this.props
        return (
            <Container id="skillSection" style={{ marginBottom: 150 }}>
                <h1 style={{ fontFamily: 'Raleway', width: '100%' }}>Skills</h1>
                <h1 className="hr" >{}</h1>

                <Grid container spacing={3} alignItems="flex-start">
                    {tiers.map(tier => (
                        <Grid item key={tier.title} xs={12} md={4}>
                            <Card>
                                {tier.titleIcon}
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    {tier.description.map(line => (
                                        <Typography variant="subtitle1" align="center" key={line}>
                                            {line}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Skills)