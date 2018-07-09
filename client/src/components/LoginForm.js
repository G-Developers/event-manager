import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { isEmpty, isLowercase, isEmail, isLength } from "validator";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  isUserNameValid = value =>
    isLowercase(value) && isLength(value, { min: 3, max: 12 });
  isValidPassword = value => isLength(value, { min: 6, max: 16 });

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <Input
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
            name="username"
          />
          {this.isUserNameValid(this.state.username) ? null : (
            <span className="text-danger">* Must be valid username</span>
          )}
        </div>
        <div className="form-group">
          <Input
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          {this.isValidPassword(this.state.password) ? null : (
            <span className="text-danger">* Must be atleast 6 digits long</span>
          )}
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

export default LoginForm;