import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { PageFrame } from "./components/layout/PageFrame.jsx";
import { SiteLayout } from "./components/layout/SiteLayout.jsx";
import { pageRoutes } from "./routes.jsx";

// Old prototype bookmarks used "#/route?query"; send them to the clean path.
function HashRouteBridge() {
  const location = useLocation();
  if (location.hash?.startsWith("#/")) {
    return <Navigate to={location.hash.slice(1)} replace />;
  }
  return null;
}

export default function App() {
  return (
    <>
      <HashRouteBridge />
      <SiteLayout>
        <Routes>
          {pageRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PageFrame title={route.title}>{route.element}</PageFrame>}
            />
          ))}
        </Routes>
      </SiteLayout>
    </>
  );
}
