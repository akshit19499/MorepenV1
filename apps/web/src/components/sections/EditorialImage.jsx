import { Photo } from "../ui/index.js";

// Photo used in split sections; fills its rounded container (see 14-image-fit.css).
export function EditorialImage({ file, alt, short = true, children }) {
  return (
    <div className={`editorial-image${short ? " short" : ""}`}>
      <Photo file={file} alt={alt} />
      {children}
    </div>
  );
}
