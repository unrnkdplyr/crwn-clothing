import { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    confirmPassword: "",
    displayName: "",
    email: "",
    password: "",
  });

  const { confirmPassword, displayName, email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
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
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
