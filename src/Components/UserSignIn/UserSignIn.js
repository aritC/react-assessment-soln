import React, { Component } from "react";

import "./UserSignIn.css";

export default class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.userNameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  submitHandler = (event) => {
    event.preventDefault();
    const userName = this.userNameRef.current.value;
    const password = this.passwordRef.current.value;

    console.log(`Sign In\nUser:${userName} Pass:${password}`);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="form">
        <b>User Name</b>
        <input
          type="text"
          ref={this.userNameRef}
          autoComplete="username"
        ></input>
        <b>Password</b>
        <input
          type="password"
          ref={this.passwordRef}
          autoComplete="current-password"
        ></input>

        <button type="submit">Sign In</button>
      </form>
    );
  }
}
