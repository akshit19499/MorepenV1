// Browser client for the Express API. VITE_API_BASE points at the deployed API;
// in development both servers run locally via `npm run dev`.
const API_BASE = (import.meta.env.VITE_API_BASE || "http://localhost:4000").replace(/\/$/, "");

async function request(path, options) {
  const response = await fetch(`${API_BASE}${path}`, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || `Request failed (${response.status})`);
    error.missing = data.missing;
    throw error;
  }
  return data;
}

export function submitEnquiry(payload) {
  return request("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}
