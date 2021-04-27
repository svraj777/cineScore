import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Blog from "./Pages/blog";
import Error from "./Pages/Error";
import { connect } from "react-redux";
import Popup from "./Components/Common/Popup";
const App = (props) => {
  console.log(props.state.dataFilterError);
  return (
    <div style={{ padding: "25px", background: "#2f3238" }}>
      {props.state.dataFilterError ? (
        <Popup isOpen={true} ErrorMsg={"something is going wrong"} />
      ) : (
        <Popup isOpen={false} ErrorMsg={"something is going wrong just for try"} />
      )}
      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='*' exact>
          <Error />
        </Route>
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
