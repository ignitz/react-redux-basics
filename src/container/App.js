import React, { Component } from "react";
import { connect } from "react-redux";

import Main from "../components/Main";
import User from "../components/User";

import { addNumber, subtrackNumber } from "../actions/mathActions";
import { setName, setAge } from "../actions/userActions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main changeUsername={name => this.props.setName(name)} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
