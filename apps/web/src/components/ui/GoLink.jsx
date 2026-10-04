import { Link } from "react-router-dom";
import { toRoute } from "../../lib/links.js";

// Internal call-to-action link: "label →". Defaults to the primary button style.
export function GoLink({ to, className = "btn", arrow = "→", children, ...rest }) {
  return (
    <Link className={className} to={toRoute(to)} {...rest}>
      {children}
      <span className="arrow" aria-hidden="true">
        {arrow}
      </span>
    </Link>
  );
}
