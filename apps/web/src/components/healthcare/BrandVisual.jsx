import { healthcareBrands } from "@morepen/shared";
import { Photo } from "../ui/index.js";

// Brand-led visual stage: real packshots on a soft gradient, never redrawn labels.
export function BrandVisual({ kind, large = false }) {
  const brand = healthcareBrands[kind];
  return (
    <div className={`brand-stage brand-${kind}${large ? " brand-large" : ""}`} data-brand-art={kind}>
      <div className="brand-masthead">
        {brand.logo ? (
          <Photo file={brand.logo} alt={`${brand.brand} logo`} className="brand-wordmark" />
        ) : (
          <strong className="brand-wordmark brand-wordmark-text">{brand.brand}</strong>
        )}
        <span>{brand.label}</span>
      </div>
      <div className="packshot-row">
        {brand.items.map(([file, alt]) => (
          <Photo key={file} file={file} alt={alt} className="packshot" />
        ))}
      </div>
      <div className="brand-stage-foot">
        <span>{brand.line}</span>
        <span>MOREPEN HEALTHCARE</span>
      </div>
    </div>
  );
}
