import * as React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import GradeIcon from "@material-ui/icons/Grade";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `Home`, path: `/`, icons: HomeIcon },
  { title: `about us`, path: `/about`, icons: GradeIcon },
  { title: `product`, path: `/products`, icons: FavoriteIcon },
  { title: `blog`, path: `/blog`, icons: ThumbUpIcon },
  // { title: `contact`, path: `/contact`, icons: GradeIcon },
  // { title: `faq`, path: `/faq`, icons: GradeIcon },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' style={{ backgroundColor: "transparent", position: "relative" }}>
      <Toolbar>
        <SideDrawer navLinks={navLinks} edge='start' className={classes.menuButton} aria-label='menu' />
        {/* <form className={classes.root} noValidate autoComplete='off'>
          <TextField id='filled-basic' label='Filled' variant='filled' />
        </form> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
