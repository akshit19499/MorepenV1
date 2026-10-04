// Static media lives in apps/web/public and is served from the site root.
// BASE_URL is "/" in production and "./" for relative preview builds.
const base = import.meta.env.BASE_URL || "/";
export const asset = (file) => `${base}assets/${file}`;
export const documentUrl = (file) => `${base}documents/${file}`;
