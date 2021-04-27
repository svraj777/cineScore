import React, { lazy, Suspense } from "react";

import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import "../../index.css";
import { connect } from "react-redux";
import Error from "../ErrorHandling/Error";
const CardComp = lazy(() => import("./CardComp"));
const MoviesList = (props) => {
  return (
    <Container style={{ position: "relative", zIndex: "2" }} className='movies'>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Grid container>
          {props.rowData ? props.rowData.length < 1 ? <Error error={"No Data Found"} /> : null : null}
          {props.rowData ? (
            props.rowData.slice(0, 5).map((movie) => <CardComp movie={movie} />)
          ) : (
            <Error error={"Loading..."} />
          )}
        </Grid>
      </Suspense>
    </Container>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { rowData: state.movies.results };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //   return {
  //     filtering: (page) => dispatch(loginUser(page)),
  //   };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
