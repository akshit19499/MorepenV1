// External link: opens in a new tab and carries the "↗" marker.
export function ExtLink({ href, className = "text-link", children, ...rest }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener" {...rest}>
      {children}
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
