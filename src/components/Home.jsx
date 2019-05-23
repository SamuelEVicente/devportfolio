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
        width: '50%'
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid id="homeSection" container className={classes.root} >
                <Grid container className={classes.container} alignContent="center" alignItems="center">
                    <Grid item className={classes.column}>
                        <AnimatedText />
                    </Grid>
                    <Grid item className={classes.column} style={{ marginTop: 100 }}>
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