import { Photo } from "../ui/index.js";

// Photo with the offset smoke-grey backing plate used in split sections.
export function EditorialImage({ file, alt, short = true, children }) {
  return (
    <div className={`editorial-image${short ? " short" : ""}`}>
      <Photo file={file} alt={alt} />
      {children}
    </div>
  );
}
