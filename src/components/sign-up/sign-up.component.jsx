import { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      confirmPassword: "",
      displayName: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { confirmPassword, displayName, email, password } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { handleChange, handleSubmit, state } = this;
    const { confirmPassword, displayName, email, password } = state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            onChange={handleChange}
            required
            value={displayName}
          />
          <FormInput
            label="Email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={email}
          />
          <FormInput
            label="Password"
            name="password"
            onChange={handleChange}
            required
            type="password"
            value={password}
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            required
            type="password"
            value={confirmPassword}
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
