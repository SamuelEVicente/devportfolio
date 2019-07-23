import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AnimatedText from './AnimatedText';

const styles = theme => ({
    root: {
        height: '100%',
        width: '100%'
    },
    container: {
        height: '95%',
        width: '100%'
    },
    column: {
        height: '95%',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          fontSize: 8
        },
    },
    columnOne: {
        height: '95%',
        width: '50%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid id="homeSection" container style={{marginBottom: 150, marginTop: 150}}>
                <Grid container className={classes.container} alignContent="center" alignItems="center">
                    <Grid item className={classes.column}>
                        <AnimatedText />
                    </Grid>
                    <Grid item className={classes.columnOne} style={{ marginTop: 100 }}>
                        <img src="images/JustLogoSideWays.png" alt="Dev Logo" />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)