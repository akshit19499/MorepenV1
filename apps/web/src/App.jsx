import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { pages } from "@morepen/shared";
import { SiteFooter } from "./components/SiteFooter.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";
import { ApiPage } from "./pages/ApiPage.jsx";
import { CompanyPage } from "./pages/CompanyPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { GenericPage } from "./pages/GenericPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { InvestorsPage } from "./pages/InvestorsPage.jsx";

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
      <SiteHeader />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          {Object.keys(pages)
            .filter((path) => !["/", "/company", "/api", "/contact", "/investors"].includes(path))
            .map((path) => (
              <Route key={path} path={path} element={<GenericPage path={path} />} />
            ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
