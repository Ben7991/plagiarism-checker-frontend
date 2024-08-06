import { useState } from "react";

import Alert from "../../../components/molecules/Alert/Alert";
import PageDescriptor from "../../../components/molecules/PageDescriptor/PageDescriptor";
import FormGroup from "../../../components/atoms/FormGroup/FormGroup";
import FormControl from "../../../components/molecules/FormControl/FormControl";
import Label from "../../../components/atoms/Label/Label";
import LockIcon from "../../../components/atoms/Icons/LockIcon";
import PasswordToggler from "../../../components/atoms/PasswordToggler/PasswordToggler";
import ArrowLeft from "../../../components/atoms/Icons/ArrowLeft";
import Button from "../../../components/atoms/Button/Button";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassowrd] = useState(false);

  function handleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassowrd(prevState => !prevState);
  }

  return (
    <>
      <Alert variant="error" show/>
      <PageDescriptor 
        title="Reset Password"
        description="Please enter your email to receive the reset link in your mail." />

      <form>
        <FormGroup classname="mb-2">
          <Label title="Password" id="password" />
          <FormControl type={showPassword ? "text" : "password"} id="password" leftIcon={LockIcon}
            placeholder="Type your password here">
            <PasswordToggler show={showPassword} toggle={handleShowPassword}/>
          </FormControl>
        </FormGroup>

        <FormGroup classname="mb-2">
          <Label title="Confirm password" id="confirmPassword" />
          <FormControl type={showConfirmPassword ? "text" : "password"} id="confirmPassword" leftIcon={LockIcon}
            placeholder="Confirm your password">
            <PasswordToggler show={showConfirmPassword} toggle={handleShowConfirmPassword}/>
          </FormControl>
        </FormGroup>

        <div className="flex flex-column gap-16">
          <Button variant="primary" type="submit">Save new password</Button>
          <Button title="Back to login" variant="secondary" link path="/">
            <span className="flex align-items-center justify-content-center gap-8">
              <ArrowLeft /> Back to login
            </span>
          </Button>
        </div>
      </form>
    </>
  );
}