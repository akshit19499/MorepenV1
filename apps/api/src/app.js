import cors from "cors";
import express from "express";
import {
  apiCategories,
  contactTopics,
  financialHighlights,
  investorDocuments,
  pages,
  products,
  publications,
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
    res.json({ routes });
  });

  app.get("/api/pages", (_req, res) => {
    res.json({ pages });
  });

  app.get("/api/pages/*", (req, res) => {
    const path = `/${req.params[0] || ""}`.replace(/\/$/, "") || "/";
    const page = pages[path];
    if (!page) {
      res.status(404).json({ error: "Page not found" });
      return;
    }
    res.json({ path, page });
  });

  app.get("/api/products", (req, res) => {
    const { category = "All", q = "" } = req.query;
    const needle = String(q).trim().toLowerCase();
    const filtered = products.filter((product) => {
      const categoryMatches = category === "All" || product.category === category;
      const searchMatches =
        !needle ||
        [product.name, product.category, product.therapy, ...(product.forms || [])].some((value) =>
          String(value).toLowerCase().includes(needle)
        );
      return categoryMatches && searchMatches;
    });

    res.json({ categories: apiCategories, products: filtered, total: filtered.length });
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

  app.get("/api/publications", (_req, res) => {
    res.json({ publications });
  });

  app.get("/api/contact-topics", (_req, res) => {
    res.json({ topics: contactTopics });
  });

  app.post("/api/enquiries", (req, res) => {
    const { name, email, company, topic, message } = req.body || {};
    if (!name || !email || !topic || !message) {
      res.status(400).json({ error: "Name, email, topic and message are required." });
      return;
    }

    res.status(202).json({
      ok: true,
      message:
        "Enquiry validated. Persistence and email delivery should be connected after final approval.",
      enquiry: { name, email, company: company || "", topic, message }
    });
  });

  return app;
}
