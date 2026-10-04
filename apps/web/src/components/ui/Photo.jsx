import { asset } from "../../lib/assets.js";

export function Photo({ file, alt = "", className, eager = false, ...rest }) {
  return (
    <img
      src={asset(file)}
      alt={alt}
      className={className || undefined}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...rest}
    />
  );
}
