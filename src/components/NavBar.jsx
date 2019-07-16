import React, { PureComponent } from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircleOutlined'
import MailIcon from '@material-ui/icons/MailOutlined'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import EyeIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import WorkIcon from '@material-ui/icons/WorkOutline'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll"

class NavBar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            onPointerOverHome: false,
            onPointerOverAbout: false,
            onPointerOverWork: false,
            onPointerOverSkills: false,
            onPointerOverContact: false,
            onPointerOverLinkedin: false,
            onPointerOverTwitter: false,
            onPointerOverFacebook: false,
            onPointerOverInstagram: false
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop()
    }

    onPointerOver = (key) => {
        this.setState({ [key]: true })
    }

    onPointerLeave = (key) => {
        this.setState({ [key]: false })
    }

    renderSocialIcons = () => {
        return (
            <div>
                <IconButton onPointerLeave={() => this.onPointerLeave('onPointerOverLinkedin')} onPointerOver={() => this.onPointerOver('onPointerOverLinkedin')} href="https://www.linkedin.com/in/samuel-vicente-4a275193/" style={{ color: 'black' }}>
                    <FaLinkedin color={this.state.onPointerOverLinkedin ? "#87CEEB" : "black"} />
                </IconButton>
                <IconButton onPointerLeave={() => this.onPointerLeave('onPointerOverTwitter')} onPointerOver={() => this.onPointerOver('onPointerOverTwitter')} href="https://twitter.com/SammyVicente_" style={{ color: 'black' }} >
                    <FaTwitter color={this.state.onPointerOverTwitter ? "#87CEEB" : "black"} />
                </IconButton>
                <IconButton onPointerLeave={() => this.onPointerLeave('onPointerOverFacebook')} onPointerOver={() => this.onPointerOver('onPointerOverFacebook')} href="https://www.facebook.com/samueleduardomusic" style={{ color: 'black' }}>
                    <FaFacebook color={this.state.onPointerOverFacebook ? "#87CEEB" : "black"} />
                </IconButton>
                <IconButton onPointerLeave={() => this.onPointerLeave('onPointerOverInstagram')} onPointerOver={() => this.onPointerOver('onPointerOverInstagram')} href="https://www.instagram.com/samuelevicente/?hl=en" style={{ color: 'black' }}>
                    <FaInstagram color={this.state.onPointerOverInstagram ? "#87CEEB" : "black"} />
                </IconButton>
            </div>
        )
    }

    renderActionIcons = () => {
        return (
            <div>
                <Link
                    activeClass="active"
                    to="homeSection"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    <IconButton style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverHome')} onPointerLeave={() => this.onPointerLeave('onPointerOverHome')} >
                        {!this.state.onPointerOverHome ? <HomeIcon color={this.state.onPointerOverHome ? "#87CEEB" : 'inherit'} fontSize="large" /> : <p className="nav-label">Home</p>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="aboutSection"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    <IconButton style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverAbout')} onPointerLeave={() => this.onPointerLeave('onPointerOverAbout')}>
                        {!this.state.onPointerOverAbout ? <AccountCircle fontSize="large" /> : <p className="nav-label">About</p>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="workSection"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    <IconButton style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverWork')} onPointerLeave={() => this.onPointerLeave('onPointerOverWork')}>
                        {!this.state.onPointerOverWork ? <WorkIcon fontSize="large" /> : <p className="nav-label">Projects</p>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="skillSection"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    <IconButton style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverSkills')} onPointerLeave={() => this.onPointerLeave('onPointerOverSkills')}>
                        {!this.state.onPointerOverSkills ? <EyeIcon fontSize="large" /> : <p className="nav-label">Skills</p>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    <IconButton style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverContact')} onPointerLeave={() => this.onPointerLeave('onPointerOverContact')}>
                        {!this.state.onPointerOverContact ? <MailIcon fontSize="large" /> : <p className="nav-label">Contact</p>}
                    </IconButton>
                </Link>
            </div>
        )
    }

    renderLogo = () => {
        return (
            <div>
                <img style={{ width: 100, height: 100 }} src='images/svlogo2.png' alt='svlogo' />
            </div>
        )
    }
    render() {
        //const { classes } = this.props
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="fixed" >
                    <Toolbar className='toolbar'>
                        {/* <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    > */}
                        {this.renderLogo()}
                        {this.renderActionIcons()}
                        {this.renderSocialIcons()}
                        {/* </Toolbar> */}
                        {/* </Grid> */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default NavBar