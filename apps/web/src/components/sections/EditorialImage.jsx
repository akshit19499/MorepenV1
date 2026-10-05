import { Photo } from "../ui/index.js";

// Photo with the offset smoke-grey backing plate used in split sections.
// `plain` drops the offset backing plate so the photo stands on its own.
export function EditorialImage({ file, alt, short = true, plain = false, children }) {
  return (
    <div className={`editorial-image${short ? " short" : ""}${plain ? " plain" : ""}`}>
      <Photo file={file} alt={alt} />
      {children}
    </div>
  );
}
