import { Link, useLocation } from "react-router-dom";
import { healthcareRoutes } from "@morepen/shared";

// Secondary navigation shown under every Healthcare page hero.
export function HealthcareSubnav() {
  const { pathname } = useLocation();
  return (
    <nav className="healthcare-subnav" aria-label="Healthcare pages">
      <div className="wrap">
        {healthcareRoutes.map((route) => (
          <Link key={route.path} to={route.path} aria-current={pathname === route.path ? "page" : undefined}>
            {route.subnavLabel}
          </Link>
        ))}
      </div>
    </nav>
  );
}
