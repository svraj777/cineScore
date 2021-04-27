import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
    flexGrow: 1,
    height: "200px",
  },
  media: {
    height: "100%",
    // paddingTop: "56.25%", // 16:9
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: "15px",
  },
}));
const CardComp = ({ movie }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} md>
      <Paper className={classes.paper}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://dummyimage.com/600x400/000000/fff&text=ImageNotFound"
            }
          />
        </Card>
        <CardContent>
          <Typography gutterBottom variant='h6' component='h6' style={{ fontSize: "16px" }}>
            {movie.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='span'>
            {movie.vote_average}
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default CardComp;
