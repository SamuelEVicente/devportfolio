import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Link } from "react-scroll"
import MoreIcon from '@material-ui/icons/MoreVert'
import Toolbar, { styles as toolbarStyles } from './Toolbar'
import AccountCircle from '@material-ui/icons/AccountCircleOutlined'
import MailIcon from '@material-ui/icons/MailOutlined'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import EyeIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import WorkIcon from '@material-ui/icons/WorkOutline'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 20,
    color: '#8fdce4',
    marginLeft: theme.spacing(3),
    'fontFamily': "'Josefin Slab', serif"
  },
  grow: {
    flexGrow: 1,
    padding: 100
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  titleContainer: {
    width: '100%'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    color: 'black',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default function AppBarResponsive() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [onPointerOverHome, setOnPointerOverHome] = React.useState(null)
  const [onPointerOverAbout, setOnPointerOverAbout] = React.useState(null)
  const [onPointerOverWork, setOnPointerOverWork] = React.useState(null)
  const [onPointerOverSkills, setOnPointerOverSkills] = React.useState(null)
  const [onPointerOverContact, setOnPointerOverContact] = React.useState(null)
  const [onPointerOverLinkedin, setOnPointerOverLinkedin] = React.useState(null)
  const [onPointerOverTwitter, setOnPointerOverTwitter] = React.useState(null)
  const [onPointerOverFacebook, setOnPointerOverFacebook] = React.useState(null)
  const [onPointerOverInstagram, setOnPointerOverInstagram] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMenuClose() {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  function onPointerOver(key) {
    switch (key) {
      case 'onPointerOverHome':
        setOnPointerOverHome(true)
        break
      case 'onPointerOverAbout':
        setOnPointerOverAbout(true)
        break
      case 'onPointerOverWork':
        setOnPointerOverWork(true)
        break
      case 'onPointerOverSkills':
        setOnPointerOverSkills(true)
        break
      case 'onPointerOverContact':
        setOnPointerOverContact(true)
        break
      case 'onPointerOverLinkedin':
        setOnPointerOverLinkedin(true)
        break
      case 'onPointerOverTwitter':
        setOnPointerOverTwitter(true)
        break
      case 'onPointerOverFacebook':
        setOnPointerOverFacebook(true)
        break
      case 'onPointerOverInstagram':
        setOnPointerOverInstagram(true)
        break
      default:
        break
    }
  }

  function onPointerLeave(key) {
    switch (key) {
      case 'onPointerOverHome':
        setOnPointerOverHome(false)
        break
      case 'onPointerOverAbout':
        setOnPointerOverAbout(false)
        break
      case 'onPointerOverWork':
        setOnPointerOverWork(false)
        break
      case 'onPointerOverSkills':
        setOnPointerOverSkills(false)
        break
      case 'onPointerOverContact':
        setOnPointerOverContact(false)
        break
      case 'onPointerOverLinkedin':
        setOnPointerOverLinkedin(false)
        break
      case 'onPointerOverTwitter':
        setOnPointerOverTwitter(false)
        break
      case 'onPointerOverFacebook':
        setOnPointerOverFacebook(false)
        break
      case 'onPointerOverInstagram':
        setOnPointerOverInstagram(false)
        break
      default:
        break
    }
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      //anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      // anchorOrigin={{
      //     vertical: 'top',
      //     horizontal: 'right',
      // }}
      // keepMounted
      // transformOrigin={{
      //     vertical: 'top',
      //     horizontal: 'right',
      // }}

      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link
          activeclass="active"
          to="homeSection"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
        >
          {'Home'}
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeclass="active"
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
        >
          {'About'}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link
          activeclass="active"
          to="workSection"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
        >
          {'Work'}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link
          activeclass="active"
          to="skillSection"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
        >
          {'Skills'}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link
          activeclass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
        >
          {'Contact'}
        </Link>
      </MenuItem>
    </Menu>
  )

  const renderSocialIcons = (
    <div className={classes.sectionDesktop}>
      <IconButton onPointerLeave={() => onPointerLeave('onPointerOverLinkedin')} onPointerOver={() => onPointerOver('onPointerOverLinkedin')} href="https://www.linkedin.com/in/samuel-vicente-4a275193/" style={{ color: 'black' }}>
        <FaLinkedin color={onPointerOverLinkedin ? "#87CEEB" : "black"} />
      </IconButton>
      <IconButton onPointerLeave={() => onPointerLeave('onPointerOverTwitter')} onPointerOver={() => onPointerOver('onPointerOverTwitter')} href="https://twitter.com/SammyVicente_" style={{ color: 'black' }} >
        <FaTwitter color={onPointerOverTwitter ? "#87CEEB" : "black"} />
      </IconButton>
      <IconButton onPointerLeave={() => onPointerLeave('onPointerOverFacebook')} onPointerOver={() => onPointerOver('onPointerOverFacebook')} href="https://www.facebook.com/samueleduardomusic" style={{ color: 'black' }}>
        <FaFacebook color={onPointerOverFacebook ? "#87CEEB" : "black"} />
      </IconButton>
      <IconButton onPointerLeave={() => onPointerLeave('onPointerOverInstagram')} onPointerOver={() => onPointerOver('onPointerOverInstagram')} href="https://www.instagram.com/samuelevicente/?hl=en" style={{ color: 'black' }}>
        <FaInstagram color={onPointerOverInstagram ? "#87CEEB" : "black"} />
      </IconButton>
    </div>
  )


  const renderActionIcons = (
    <div className={classes.title}>
      <Link
        activeclass="active"
        to="homeSection"
        spy={true}
        smooth={true}
        offset={-125}
        duration={500}
      >
        <IconButton style={{ color: 'black' }} onPointerOver={() => onPointerOver('onPointerOverHome')} onPointerLeave={() => onPointerLeave('onPointerOverHome')} >
          {!onPointerOverHome ? <HomeIcon color={onPointerOverHome ? "#87CEEB" : 'inherit'} fontSize="large" /> : <p className="nav-label">Home</p>}
        </IconButton>
      </Link>
      <Link
        activeclass="active"
        to="aboutSection"
        spy={true}
        smooth={true}
        offset={-125}
        duration={500}
      >
        <IconButton style={{ color: 'black' }} onPointerOver={() => onPointerOver('onPointerOverAbout')} onPointerLeave={() => onPointerLeave('onPointerOverAbout')}>
          {!onPointerOverAbout ? <AccountCircle fontSize="large" /> : <p className="nav-label">About</p>}
        </IconButton>
      </Link>
      <Link
        activeclass="active"
        to="workSection"
        spy={true}
        smooth={true}
        offset={-125}
        duration={500}
      >
        <IconButton style={{ color: 'black' }} onPointerOver={() => onPointerOver('onPointerOverWork')} onPointerLeave={() => onPointerLeave('onPointerOverWork')}>
          {!onPointerOverWork ? <WorkIcon fontSize="large" /> : <p className="nav-label">Projects</p>}
        </IconButton>
      </Link>
      <Link
        activeclass="active"
        to="skillSection"
        spy={true}
        smooth={true}
        offset={-125}
        duration={500}
      >
        <IconButton style={{ color: 'black' }} onPointerOver={() => onPointerOver('onPointerOverSkills')} onPointerLeave={() => onPointerLeave('onPointerOverSkills')}>
          {!onPointerOverSkills ? <EyeIcon fontSize="large" /> : <p className="nav-label">Skills</p>}
        </IconButton>
      </Link>
      <Link
        activeclass="active"
        to="contactSection"
        spy={true}
        smooth={true}
        offset={-125}
        duration={500}
      >
        <IconButton style={{ color: 'black' }} onPointerOver={() => onPointerOver('onPointerOverContact')} onPointerLeave={() => onPointerLeave('onPointerOverContact')}>
          {!onPointerOverContact ? <MailIcon fontSize="large" /> : <p className="nav-label">Contact</p>}
        </IconButton>
      </Link>
    </div>
  )

  const renderLogo = (
    <div>
      <img style={{ width: 100, height: 100 }} src='images/svlogo2.png' alt='svlogo' />
    </div>
  )

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar className={classes.toolbar}>
          {renderLogo}
          {renderActionIcons}
          {renderSocialIcons}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}