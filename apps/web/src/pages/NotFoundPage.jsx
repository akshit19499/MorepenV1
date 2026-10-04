import { GoLink } from "../components/ui/index.js";

export function NotFoundPage() {
  return (
    <section className="page-404">
      <h1>Page not found.</h1>
      <p>This page is not part of the website.</p>
      <GoLink to="">Return home</GoLink>
    </section>
  );
}
