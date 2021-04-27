import { Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link } from "react-router-dom";
import "../../index.css";
const Logo = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 34px;
  padding: 10px 0;
  cursor: pointer;
  :hover & {
    color: white;
  }
`;
const useStyles = makeStyles({
  paper: {
    background: "#181b21",
    color: "#fff",
  },
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `capitalize`,
  },
  color: {
    color: "white",
  },
});

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Logo href='/'>Logo</Logo>
      <List
        component='nav'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader' className={classes.color}>
            Nested List Items
          </ListSubheader>
        }>
        {navLinks.map((icon) => (
          <Link to={icon.path} className={classes.linkText}>
            <ListItem button>
              <ListItemIcon>
                <icon.icons />
              </ListItemIcon>
              <ListItemText primary={icon.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton edge='start' aria-label='menu' onClick={toggleDrawer("left", true)}>
        <Menu fontSize='large' style={{ color: `white` }} />
      </IconButton>

      <Drawer
        anchor='left'
        open={state.left}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}
        classes={{ paper: classes.paper }}>
        {sideDrawerList("left")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
