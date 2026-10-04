import {
  apiCategories,
  contactTopics,
  financialHighlights,
  investorDocuments,
  pages,
  products,
  publications
} from "@morepen/shared";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

async function request(path, options) {
  const response = await fetch(`${API_BASE}${path}`, options);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  try {
    return await request(`/api/products${query ? `?${query}` : ""}`);
  } catch {
    return { categories: apiCategories, products, total: products.length };
  }
}

export async function getPublications() {
  try {
    return await request("/api/publications");
  } catch {
    return { publications };
  }
}

export async function getInvestorDocuments(params = {}) {
  const query = new URLSearchParams(params).toString();
  try {
    return await request(`/api/investor-documents${query ? `?${query}` : ""}`);
  } catch {
    const filtered = investorDocuments.filter(
      (document) => !params.category || params.category === "all" || document.category === params.category
    );
    const limit = Number(params.limit);
    return {
      documents: Number.isFinite(limit) && limit > 0 ? filtered.slice(0, limit) : filtered,
      total: filtered.length
    };
  }
}

export async function getFinancialHighlights() {
  try {
    return await request("/api/financial-highlights");
  } catch {
    return { highlights: financialHighlights };
  }
}

export async function getContactTopics() {
  try {
    return await request("/api/contact-topics");
  } catch {
    return { topics: contactTopics };
  }
}

export async function submitEnquiry(payload) {
  return request("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}

export function getPage(path) {
  return pages[path] || pages["/"];
}
