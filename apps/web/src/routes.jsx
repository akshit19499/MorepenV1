import { legacyCdmoRoutes, pageTitles } from "@morepen/shared";
import { ApiPage } from "./pages/ApiPage.jsx";
import { CareersPage } from "./pages/CareersPage.jsx";
import { CdmoPage } from "./pages/CdmoPage.jsx";
import { CompanyPage } from "./pages/CompanyPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { DrugProductPage } from "./pages/DrugProductPage.jsx";
import { HealthcarePage } from "./pages/HealthcarePage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { InvestorsPage } from "./pages/InvestorsPage.jsx";
import { ManufacturingPage } from "./pages/ManufacturingPage.jsx";
import { MedicalDevicesPage } from "./pages/MedicalDevicesPage.jsx";
import { NewsroomPage } from "./pages/NewsroomPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { OtcPage } from "./pages/OtcPage.jsx";
import { PrivacyPage } from "./pages/PrivacyPage.jsx";
import { QualityPage } from "./pages/QualityPage.jsx";
import { ResearchPage } from "./pages/ResearchPage.jsx";
import { RxPage } from "./pages/RxPage.jsx";
import { SustainabilityPage } from "./pages/SustainabilityPage.jsx";
import { TransformationPage } from "./pages/TransformationPage.jsx";

const page = (path, element) => ({ path, title: pageTitles[path], element });

export const pageRoutes = [
  page("/", <HomePage />),
  page("/company", <CompanyPage />),
  page("/transformation", <TransformationPage />),
  page("/api", <ApiPage />),
  page("/cdmo", <CdmoPage />),
  page("/drug-product", <DrugProductPage />),
  page("/research", <ResearchPage />),
  page("/manufacturing", <ManufacturingPage />),
  page("/quality", <QualityPage />),
  page("/sustainability", <SustainabilityPage />),
  page("/healthcare", <HealthcarePage />),
  page("/healthcare/medical-devices", <MedicalDevicesPage />),
  page("/healthcare/rx", <RxPage />),
  page("/healthcare/otc", <OtcPage />),
  page("/investors", <InvestorsPage />),
  page("/newsroom", <NewsroomPage />),
  page("/careers", <CareersPage />),
  page("/contact", <ContactPage />),
  page("/privacy", <PrivacyPage />),
  ...legacyCdmoRoutes.map((path) => ({ path, title: pageTitles["/cdmo"], element: <CdmoPage /> })),
  { path: "*", title: "Page not found", element: <NotFoundPage /> }
];
