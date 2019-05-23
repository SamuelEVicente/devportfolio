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
            onPointerOverContact: false
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
                <IconButton href="https://www.linkedin.com/in/samuel-vicente-4a275193/" style={{ color: 'black' }}>
                    <FaLinkedin />
                </IconButton>
                <IconButton href="https://twitter.com/SammyVicente_" style={{ color: 'black' }} >
                    <FaTwitter/>
                </IconButton>
                <IconButton href="https://www.facebook.com/samueleduardomusic" style={{ color: 'black' }}>
                    <FaFacebook/>
                </IconButton>
                <IconButton href="https://www.instagram.com/samuelevicente/?hl=en" style={{ color: 'black' }}>
                    <FaInstagram />
                </IconButton>
            </div>
        )
    }

    renderActionIcons = () => {
        return (
            <div>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <IconButton id="Home" style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverHome')} onPointerLeave={() => this.onPointerLeave('onPointerOverHome')} >
                        {!this.state.onPointerOverHome ? <HomeIcon fontSize="large" /> : <text>Home</text>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <IconButton id="About" style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverAbout')} onPointerLeave={() => this.onPointerLeave('onPointerOverAbout')}>
                        {!this.state.onPointerOverAbout ? <AccountCircle fontSize="large" /> : <text>About</text>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <IconButton id="Work" style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverWork')} onPointerLeave={() => this.onPointerLeave('onPointerOverWork')}>
                        {!this.state.onPointerOverWork ? <WorkIcon fontSize="large" /> : <text>My Work</text>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <IconButton id="Skills" style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverSkills')} onPointerLeave={() => this.onPointerLeave('onPointerOverSkills')}>
                        {!this.state.onPointerOverSkills ? <EyeIcon fontSize="large" /> : <text>Skills</text>}
                    </IconButton>
                </Link>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <IconButton id="Contact" style={{ color: 'black' }} onPointerOver={() => this.onPointerOver('onPointerOverContact')} onPointerLeave={() => this.onPointerLeave('onPointerOverContact')}>
                        {!this.state.onPointerOverContact ? <MailIcon fontSize="large" /> : <text>Contact</text>}
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
            <div>
                <AppBar style={{ backgroundColor: 'transparent' }} position="static" >
                    <Toolbar style={{ flex: 1, justifyContent: 'space-between' }}>
                        {this.renderLogo()}
                        {this.renderActionIcons()}
                        {this.renderSocialIcons()}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default NavBar