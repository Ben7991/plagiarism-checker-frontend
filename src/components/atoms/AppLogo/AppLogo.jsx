import logo from "../../../assets/logo.svg";

export default function AppLogo() {
  let containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "7.19px",
  };

  let textStyle = {
    fontSize: "21.46px",
    fontFamily: "var(--ff-brand)",
    fontWeight: "var(--fw-regular)",
    color: "var(--sea-blue-100)",
  }

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Application logo" />
      <h3 style={textStyle}>Plagicheck</h3>
    </div>
  );
}