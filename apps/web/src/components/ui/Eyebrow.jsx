export function Eyebrow({ children, as: Tag = "p", className = "eyebrow", ...rest }) {
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}
