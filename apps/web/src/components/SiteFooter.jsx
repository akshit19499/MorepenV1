import { NavLink } from "react-router-dom";
import { routes } from "@morepen/shared";
import { asset } from "../data/assets.js";

const footerRoutes = routes.filter((route) =>
  ["/company", "/api", "/cdmo", "/research", "/investors", "/contact", "/privacy"].includes(
    route.path
  )
);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-logo" src={asset("morepen-logo.png")} alt="Morepen Laboratories" />
          <p>
            A science-led pharmaceutical and healthcare platform with API, CDMO, drug-product,
            manufacturing and healthcare business visibility.
          </p>
        </div>
        <div>
          <h2>Platform</h2>
          {footerRoutes.slice(0, 5).map((route) => (
            <NavLink key={route.path} to={route.path}>
              {route.label}
            </NavLink>
          ))}
        </div>
        <div>
          <h2>Support</h2>
          <NavLink to="/manufacturing">Manufacturing</NavLink>
          <NavLink to="/quality">Quality & Accreditations</NavLink>
          <NavLink to="/newsroom">Newsroom</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Morepen Laboratories Limited</span>
        <span>
          <NavLink to="/privacy">Privacy</NavLink>
        </span>
      </div>
    </footer>
  );
}
