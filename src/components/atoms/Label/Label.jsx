export default function Label({title, id}) {
  return (
    <label style={{fontSize: "0.875em"}}
      htmlFor={id}>{title}</label>
  );
}