import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import HomeIcon from "@material-ui/icons/Home";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import logo from '../sun.svg'
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    width:"32px",
    height:"32px"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));
const linkStyles = {
  color:"white",
  textDecoration:"none",
}
export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link style={{textDecoration:"none",color:"blue"}} href="/">
      <MenuItem>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        Home
      </MenuItem>
      </Link>

      <Link style={{textDecoration:"none",color:"blue"}} href="/search">
      <MenuItem>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        Search
      </MenuItem>
      </Link>

      <Link style={{textDecoration:"none",color:"blue"}} href="/subscribe">
      <MenuItem>
        <IconButton color="inherit">
          <MailIcon />
        </IconButton>
        Subscribe
      </MenuItem>
      </Link>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} className={classes.logo} alt="logo"></img>
          <Typography className={classes.title} variant="h6" noWrap>
            Weather App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link style={linkStyles} href="/">
            <MenuItem>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
              <p>Home</p>
            </MenuItem>
            </Link>

            <Link style={linkStyles} href="/search">
            <MenuItem>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <p>Search</p>
            </MenuItem>
            </Link>

            <Link style={linkStyles} href="/subscribe">
            <MenuItem>
              <IconButton color="inherit">
                <MailIcon />
              </IconButton>
              <p>Subscribe</p>
            </MenuItem>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
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
      {renderMenu}
    </div>
  );
}
