import { scrollToId } from "../../lib/links.js";

// In-page jump rendered as a button (keeps the URL unchanged).
export function ScrollButton({ target, className = "btn", children, ...rest }) {
  return (
    <button type="button" className={className} onClick={() => scrollToId(target)} {...rest}>
      {children}
    </button>
  );
}

// In-page jump rendered as an anchor, as the prototype did for hero actions.
export function ScrollLink({ target, className = "btn", children, ...rest }) {
  return (
    <a
      className={className}
      href={`#${target}`}
      onClick={(event) => {
        event.preventDefault();
        scrollToId(target);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
