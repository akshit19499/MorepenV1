import { Link } from "react-router-dom";
import { utilityLinks } from "@morepen/shared";

export function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap">
        <span>MOREPEN LABORATORIES LIMITED</span>
        <div className="utility-links">
          {utilityLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
          <Link className="utility-partner" to="/contact">
            Partner with us ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
