import EyeIcon from "../Icons/EyeIcon";
import EyeSlashIcon from "../Icons/EyeSlashIcon";

export default function PasswordToggler({show, toggle}) {
  let btnStyle = {
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",
    lineHeight: "0.5"
  };

  return (
    <button style={btnStyle} type="button" onClick={toggle}>
      {show ? <EyeSlashIcon /> : <EyeIcon />}
    </button>
  );
}