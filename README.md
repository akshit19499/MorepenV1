# Morepen Website MERN Rebuild

This repository now contains a modular MERN-oriented rebuild beside the legacy HTML prototype.

## Structure

```text
apps/
  web/   React + Vite frontend
  api/   Express API with optional MongoDB connection
packages/
  shared/ route constants and seed content shared by web and API
```

The legacy `Morepen_Website_Draft_v58.html` remains as a reference artifact only.

## Local development

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`

API: `http://localhost:4000/health`

Set `apps/api/.env` from `apps/api/.env.example` when connecting MongoDB.
