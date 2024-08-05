export default function PageDescriptor({title, description}) {
  return (
    <div className="mb-1">
      <h4 className="mb-1 mb-md-2" style={{fontSize: "19.2px"}}>{title}</h4>
      <p style={{lineHeight: "24px"}}>{description}</p>
    </div>
  );
}