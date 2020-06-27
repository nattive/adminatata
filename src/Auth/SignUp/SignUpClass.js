import React, { Component } from "react";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUpClass extends Component {
  componentWillReceiveProps(newProps) {
    newProps.registerStatus && newProps.history.push('/dashboard');
  }
  render() {
    return <SignUp />;
  }
}

const mapStateToProps = (state) => ({
  registerStatus: state.auth.registerStatus,
});

export default connect(mapStateToProps, null)(SignUpClass);
