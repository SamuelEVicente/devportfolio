import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { IconButton } from '@material-ui/core'
function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Samuel Vicente ©2019 '}
        </Typography>
    )
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#FAFAFA',
        padding: theme.spacing(6),
    },
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
                <div>
                    <IconButton href="https://www.linkedin.com/in/samuel-vicente-4a275193/" style={{ color: 'black' }}>
                        <FaLinkedin color={"black"} />
                    </IconButton>
                    <IconButton href="https://twitter.com/SammyVicente_" style={{ color: 'black' }} >
                        <FaTwitter color={"black"} />
                    </IconButton>
                    <IconButton  href="https://www.facebook.com/samueleduardomusic" style={{ color: 'black' }}>
                        <FaFacebook color={"black"} />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/samuelevicente/?hl=en" style={{ color: 'black' }}>
                        <FaInstagram color={"black"} />
                    </IconButton>
                </div>
                <MadeWithLove />
            </footer>
            {/* End footer */}
        </React.Fragment>
    )
}