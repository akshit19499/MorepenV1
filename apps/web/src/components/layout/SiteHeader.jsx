import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { healthcareRoutes, routes } from "@morepen/shared";
import { asset } from "../../lib/assets.js";

const primaryRoutes = routes.filter((route) => route.nav);

export function SiteHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [healthcareOpen, setHealthcareOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const groupRef = useRef(null);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  // Close everything whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setHealthcareOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (healthcareOpen) {
        setHealthcareOpen(false);
        toggleRef.current?.focus();
      } else if (open) {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const onClick = (event) => {
      if (groupRef.current && !groupRef.current.contains(event.target)) setHealthcareOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [open, healthcareOpen]);

  const current = (path) => (location.pathname === path ? "page" : undefined);
  const inHealthcare = location.pathname.startsWith("/healthcare");

  const onSameRouteClick = (path) => {
    if (location.pathname === path) {
      setOpen(false);
      setHealthcareOpen(false);
      document.getElementById("main-content")?.focus();
    }
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-wrap">
        <Link className="brand" to="/" aria-label="Morepen home">
          <img src={asset("morepen-logo.png")} alt="Morepen" />
          <span>LABORATORIES LIMITED</span>
        </Link>
        <button
          ref={menuRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => {
            setOpen((value) => !value);
            if (open) setHealthcareOpen(false);
          }}
        >
          {open ? "Close   ×" : "Menu   +"}
        </button>
        <nav id="main-nav" className={`nav-links${open ? " open" : ""}`} aria-label="Main navigation">
          {primaryRoutes.map((route) =>
            route.group === "healthcare" ? (
              <div
                className="nav-group"
                id="healthcare-nav-group"
                key={route.path}
                ref={groupRef}
                onBlur={(event) => {
                  if (event.relatedTarget && !groupRef.current?.contains(event.relatedTarget)) {
                    setHealthcareOpen(false);
                  }
                }}
              >
                <button
                  ref={toggleRef}
                  type="button"
                  className={`nav-group-toggle${inHealthcare ? " section-active" : ""}`}
                  aria-expanded={healthcareOpen}
                  aria-controls="healthcare-menu"
                  data-section="healthcare"
                  onClick={() => setHealthcareOpen((value) => !value)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setHealthcareOpen(true);
                      requestAnimationFrame(() => groupRef.current?.querySelector(".nav-dropdown a")?.focus());
                    }
                  }}
                >
                  {route.label}{" "}
                  <span aria-hidden="true" className="chevron">
                    ⌄
                  </span>
                </button>
                <div className="nav-dropdown" id="healthcare-menu" hidden={!healthcareOpen}>
                  <p className="nav-dropdown-kicker">OUR HEALTHCARE BUSINESSES</p>
                  {healthcareRoutes.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      data-nav={item.path.slice(1)}
                      aria-current={current(item.path)}
                      onClick={() => onSameRouteClick(item.path)}
                    >
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={route.path}
                to={route.path}
                data-nav={route.path.slice(1)}
                aria-current={current(route.path)}
                onClick={() => onSameRouteClick(route.path)}
              >
                {route.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
