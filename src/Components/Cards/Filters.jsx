import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import "../../index.css";
import { connect } from "react-redux";
import { filtering } from "../../Redux/ActionCreator";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {},
  whiteColor: {
    color: "white",
  },
}));
function Filters(props) {
  const classes = useStyles();
  const [Page, setPage] = React.useState("");
  const [Rate, setRate] = React.useState("");
  useEffect(() => {
    console.log(Page, Rate);
    props.filtering(Page, Rate);
  }, [Page, Rate]);
  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "Page") {
      setPage(event.target.value);
    }
    if (event.target.name === "Rate") {
      setRate(event.target.value);
    }
  };
  var rate = [];
  var page = [];
  const dropDown = (max, arr) => {
    for (let i = 1; i <= max; i++) {
      arr.push(
        <MenuItem value={i} style={{ backgroundColor: "white" }}>
          {i}
        </MenuItem>
      );
    }
    return arr;
  };
  return (
    <Box display='flex' p={1} style={{ position: "relative", zIndex: "2" }}>
      <Box p={1} flexGrow={1} display='flex' alignItems='center' style={{ padding: "0 35px" }}>
        <Typography variant='span' component='b' style={{ color: "white", textTransform: "capitalize" }}>
          recommended for you...
        </Typography>
      </Box>

      <Box p={1} style={{ padding: "0 35px" }} display='flex' alignItems='center'>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label' style={{ color: "white" }}>
            Page
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={Page}
            classes={{
              root: classes.whiteColor,
              icon: classes.whiteColor,
            }}
            onChange={handleChange}
            name='Page'>
            {dropDown(props.pages, page)}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label' style={{ color: "white" }}>
            Rates
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={Rate}
            classes={{
              root: classes.whiteColor,
              icon: classes.whiteColor,
            }}
            onChange={handleChange}
            name='Rate'>
            {dropDown(10, rate)}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return { pages: state.movies.total_pages };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filtering: (page, rate) => dispatch(filtering(page, rate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
