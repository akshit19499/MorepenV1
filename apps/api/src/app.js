import cors from "cors";
import express from "express";
import {
  apiCategories,
  contactServices,
  filterProducts,
  financialHighlights,
  investorDocuments,
  news,
  pageTitles,
  products,
  publications,
  qualityRecords,
  routes
} from "@morepen/shared";

export function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || true }));
  app.use(express.json({ limit: "1mb" }));

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "morepen-api" });
  });

  app.get("/api/navigation", (_req, res) => {
    res.json({ routes, titles: pageTitles });
  });

  app.get("/api/products", (req, res) => {
    const { category = "All", q = "", sort = "featured" } = req.query;
    const filtered = filterProducts({ category, query: q, sort });
    res.json({ categories: apiCategories, products: filtered, total: filtered.length, portfolioTotal: products.length });
  });

  app.get("/api/investor-documents", (req, res) => {
    const { category = "all", limit } = req.query;
    const filtered = investorDocuments.filter(
      (document) => category === "all" || document.category === category
    );
    const parsedLimit = Number(limit);
    res.json({
      documents: Number.isFinite(parsedLimit) && parsedLimit > 0 ? filtered.slice(0, parsedLimit) : filtered,
      total: filtered.length
    });
  });

  app.get("/api/financial-highlights", (_req, res) => {
    res.json({ highlights: financialHighlights });
  });

  app.get("/api/publications", (req, res) => {
    const { type = "All" } = req.query;
    const items = type === "All" ? news : news.filter((item) => item.type === type);
    res.json({ publications, news: items });
  });

  app.get("/api/quality-records", (_req, res) => {
    res.json({ records: qualityRecords });
  });

  app.get("/api/contact-topics", (_req, res) => {
    res.json({ topics: contactServices });
  });

  app.post("/api/enquiries", (req, res) => {
    const { name, email, company, country, service, stage, message } = req.body || {};
    if (!name || !email || !company || !service || !message) {
      res.status(400).json({ error: "Name, company, email, area of interest and message are required." });
      return;
    }

    res.status(202).json({
      ok: true,
      message:
        "Enquiry validated. Persistence and email delivery should be connected after final approval.",
      enquiry: { name, email, company, country: country || "", service, stage: stage || "", message }
    });
  });

  return app;
}
