import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { healthcareRoutes, routes } from "@morepen/shared";
import { asset } from "../data/assets.js";

const primaryRoutes = routes.filter((route) => route.nav);
const utilityRoutes = routes.filter((route) => route.utility && route.path !== "/privacy");

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [healthcareOpen, setHealthcareOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip" href="#main-content">
        Skip to main content
      </a>
      <div className="utility-bar">
        <span>MOREPEN LABORATORIES LIMITED</span>
        <nav aria-label="Utility navigation">
          {utilityRoutes.slice(0, 5).map((route) => (
            <NavLink key={route.path} to={route.path}>
              {route.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="nav-wrap">
        <NavLink className="brand" to="/" aria-label="Morepen home">
          <img src={asset("morepen-logo.png")} alt="Morepen Laboratories" />
        </NavLink>
        <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav className={`primary-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
          {primaryRoutes.map((route) =>
            route.path === "/healthcare" ? (
              <div className="nav-dropdown" key={route.path}>
                <button
                  type="button"
                  className="nav-link"
                  aria-expanded={healthcareOpen}
                  onClick={() => setHealthcareOpen(!healthcareOpen)}
                >
                  {route.label}
                </button>
                <div className={`dropdown-panel ${healthcareOpen ? "open" : ""}`}>
                  {healthcareRoutes.map((item) => (
                    <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={route.path} to={route.path} onClick={() => setOpen(false)}>
                {route.label}
              </NavLink>
            )
          )}
          <NavLink className="partner-link" to="/contact" onClick={() => setOpen(false)}>
            Partner with us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
