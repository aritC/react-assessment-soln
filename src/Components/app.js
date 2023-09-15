import React, { Component } from "react";

import "./app.css";
import Success from "./Success/Success";
import UserSignIn from "./UserSignIn/UserSignIn";

export default class Application extends Component {
  render() {
    return (
      <>
        <h1>React Assessment</h1>
        <Success />
        <UserSignIn />
      </>
    );
  }
}
