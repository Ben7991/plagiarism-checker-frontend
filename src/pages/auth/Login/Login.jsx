import { useState } from "react";
import { Link } from "react-router-dom";

import FormGroup from "../../../components/atoms/FormGroup/FormGroup";
import EmailIcon from "../../../components/atoms/Icons/EmailIcon";
import LockIcon from "../../../components/atoms/Icons/LockIcon";
import Label from "../../../components/atoms/Label/Label";
import PasswordToggler from "../../../components/atoms/PasswordToggler/PasswordToggler";
import Alert from "../../../components/molecules/Alert/Alert";
import FormControl from "../../../components/molecules/FormControl/FormControl";
import PageDescriptor from "../../../components/molecules/PageDescriptor/PageDescriptor";
import Button from "../../../components/atoms/Button/Button";

export default function Login() {
  const [showPassword, setShowPassword] = useState();

  function handleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  function handleSubmit(event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  }

  return (
    <>
      <Alert variant="error" show/>
      <PageDescriptor 
        title="Login"
        description="Please enter your login details below to access your account." />

      <form onSubmit={handleSubmit}>
        <FormGroup classname="mb-2">
          <Label title="Email/Staff ID" id="username" />
          <FormControl type="email" id="username" leftIcon={EmailIcon}
            placeholder="Your email or staff ID" />
        </FormGroup>
        <FormGroup classname="mb-2">
          <Label title="Password" id="password" />
          <FormControl type={showPassword ? "text" : "password"} id="password" leftIcon={LockIcon}
            placeholder="Type your password here">
            <PasswordToggler show={showPassword} toggle={handleShowPassword}/>
          </FormControl>
        </FormGroup>

        <div className="flex align-items-center justify-content-between mb-2">
          <div className="flex align-items-center gap-8">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <Label id="rememberMe" title="Remember Me"/>
          </div>
          <Link to="/forgot-password" className="link">Forgot Password</Link>
        </div>

        <div className="flex flex-column">
          <Button title="Login" variant="primary" />
        </div>
      </form>
    </>
  );
}