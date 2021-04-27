import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function RangeSlider({ height, range }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    range(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby='continuous-slider' />
        </Grid>
      </Grid>
    </div>
  );
}
