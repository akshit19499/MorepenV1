import { usePageTitle } from "../../hooks/usePageTitle.js";

export function PageFrame({ title, children }) {
  usePageTitle(title);
  return children;
}
