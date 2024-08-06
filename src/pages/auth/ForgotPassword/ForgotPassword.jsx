import Button from "../../../components/atoms/Button/Button";
import FormGroup from "../../../components/atoms/FormGroup/FormGroup";
import ArrowLeft from "../../../components/atoms/Icons/ArrowLeft";
import EmailIcon from "../../../components/atoms/Icons/EmailIcon";
import Label from "../../../components/atoms/Label/Label";
import Alert from "../../../components/molecules/Alert/Alert";
import FormControl from "../../../components/molecules/FormControl/FormControl";
import PageDescriptor from "../../../components/molecules/PageDescriptor/PageDescriptor";

export default function ForgotPassword() {
  return (
    <>
      <Alert variant="error" show/>
      <PageDescriptor 
        title="Forgot Password"
        description="Please enter your email to receive the reset link in your mail." />

      <form>
        <FormGroup classname="mb-2">
          <Label title="Email" id="email" />
          <FormControl type="email" id="email" leftIcon={EmailIcon}
            placeholder="Your email" />
        </FormGroup>

        <div className="flex flex-column gap-16">
          <Button variant="primary" type="submit">Send reset link</Button>
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