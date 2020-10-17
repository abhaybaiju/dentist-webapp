import {SwipeableDrawer, IconButton, List, ListItem, ListItemText, Divider, ListItemIcon, ListItemAvatar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExploreIcon from '@material-ui/icons/Explore';
import SettingsIcon from '@material-ui/icons/Settings';
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";

  const useStyles = makeStyles({
    list: {
      width: 350
    },
    linkText: {
      textDecoration: `none`,
      color: `#3f3d56`,
    },
    btn: {
      textAlign:'center',
      "&:hover": {
        background:'transparent'
      }
    },
    button: {
      color:'#f2fcfe',
      border: '1px solid #d67477',
      background:'#d67477',
      borderRadius:'4px',
      textAlign:'center',
      textDecoration:'none',
      marginTop:'5%',
      padding:'2% 4%',
      width:'100%',
      "&:hover": {
        color:'#f2fcfe',
        border: '1px solid #3f3d56',
        background:'#3f3d56'
      }
    },
    hover:{}
  });

  const navLinks = [
    { title: `Home`, path: `/`, icon:<HomeIcon style={{color:'#3f3d56'}}/> },
    { title: `About Us`, path: `/About`, icon:<ExploreIcon style={{color:'#3f3d56'}}/> },
    { title: `Services`, path: `/Services`, icon:<SettingsIcon style={{color:'#3f3d56'}}/> },
    { title: `Contact Us`, path: `/Contact`, icon:<InfoIcon style={{color:'#3f3d56'}}/> }
    ];

  const SideDrawer = () => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ [anchor]: open });
    };

    const sideDrawerList = anchor => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List component="nav" style={{marginTop:'-2%'}}>
          <ListItem alignItems="flex-start" style={{background:'rgba(63, 61, 86, 0.05)', marginBottom:'3%', padding:'7% 4%'}}>
            <ListItemAvatar>
              <img src={require('./images/sidebar.svg')} alt="" height="70"/>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <p style={{color:'#3f3d56', fontWeight:'500', marginLeft:'5%'}}>Simple and easy way to book your appointments anytime!</p>
                </React.Fragment>
              }
            />
          </ListItem>
          {navLinks.map(({ title, path, icon }) => (
            <a href={path} key={title} className={classes.linkText}>
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </a>
          ))}
          <Divider style={{marginTop:'6%', marginBottom:'2%'}}/>
          <ListItem button className={classes.btn}>
            <a href="/Book" className={classes.button}><ListItemText primary="Book Now" /></a>
          </ListItem>
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer("right", true)}
        >
          <Menu fontSize="large" style={{ color: `#3f3d56` }} />
        </IconButton>

        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onOpen={toggleDrawer("right", true)}
          onClose={toggleDrawer("right", false)}
        >
          {sideDrawerList("right")}
        </SwipeableDrawer>
      </React.Fragment>
    );
  };

  export default SideDrawer;

  /*
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        Sandra Adams
      </Typography>
      {' — Do you have Paris recommendations? Have you ever…'}
    </React.Fragment>
  }
  */
