import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// components
import FormGroup from "../../../components/atoms/FormGroup/FormGroup";
import EmailIcon from "../../../components/atoms/Icons/EmailIcon";
import LockIcon from "../../../components/atoms/Icons/LockIcon";
import Label from "../../../components/atoms/Label/Label";
import PasswordToggler from "../../../components/atoms/PasswordToggler/PasswordToggler";
import Alert from "../../../components/molecules/Alert/Alert";
import FormControl from "../../../components/molecules/FormControl/FormControl";
import PageDescriptor from "../../../components/molecules/PageDescriptor/PageDescriptor";
import Button from "../../../components/atoms/Button/Button";
import { authenticate } from "../../../lib/services/auth";

// context
import { StoreContext } from "../../../store/context/store.context";

export default function Login() {
  const { auth } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    variant: "",
    show: false,
    message: ""
  });
  const [showPassword, setShowPassword] = useState();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: handleSubmit
  });

  let timer = null;

  async function handleSubmit(values) {
    if (timer) {
      clearTimeout(timer);
    }

    setIsLoading(true);
    let response = null;

    try {
      response = await authenticate(values);
      auth.setAuthUser(response.user);
      setAlert({show: true, message: response.message, variant: "success"});
      setIsLoading(false);
      
      timer = setTimeout(() => {
        setAlert(prevState => ({...prevState, show: false, message: ""}));
        navigate("/dashboard");
      }, 2000);
    }
    catch(error) {
      const message = error.message || 'Something went wrong';
      setAlert({show: true, message, variant: "error"});
      setIsLoading(false);
      timer = setTimeout(() => {
        setAlert(prevState => ({...prevState, show: false, message: ""}));
      }, 3000);
    }
  }

  function handleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  return (
    <>
      <Alert variant="error" {...alert} />
      <PageDescriptor 
        title="Login"
        description="Please enter your login details below to access your account." />

      <form onSubmit={formik.handleSubmit}>
        <FormGroup classname="mb-2">
          <Label title="Email/Staff ID" id="username" />
          <FormControl type="text" id="username" leftIcon={EmailIcon} placeholder="Your email or staff ID"
            {...formik.getFieldProps('username')} hasError={formik.errors.username && formik.touched.username}
            errorMessage="Required" />
        </FormGroup>
        <FormGroup classname="mb-2">
          <Label title="Password" id="password" />
          <FormControl type={showPassword ? "text" : "password"} id="password" leftIcon={LockIcon} 
            placeholder="Type your password here" {...formik.getFieldProps('password')}
            hasError={formik.errors.password && formik.touched.password} errorMessage="Required">
            <PasswordToggler show={showPassword} toggle={handleShowPassword} />
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
          <Button variant="primary" type="submit">
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </div>
      </form>
    </>
  );
}