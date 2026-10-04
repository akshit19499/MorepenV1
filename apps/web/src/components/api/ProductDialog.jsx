import { useEffect, useRef } from "react";
import { productDialogCopy } from "../../content/api.js";
import { Eyebrow, ExtLink, GoLink } from "../ui/index.js";
import { productEnquiryRoute } from "./ProductCard.jsx";

// Native <dialog> with the molecule details. Opens with showModal() whenever
// `product` is set; closes via the × button, Escape or a backdrop click, and
// reports closure through `onClose` so the page can return focus to the trigger.
export function ProductDialog({ product, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const handleClose = () => onClose?.();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!product || !dialog || dialog.open) return;
    dialog.showModal();
    closeRef.current?.focus();
  }, [product]);

  const handleBackdropClick = (event) => {
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      dialog.close();
    }
  };

  return (
    <dialog
      id="product-dialog"
      className="product-dialog"
      aria-labelledby="product-dialog-title"
      ref={dialogRef}
      onClick={handleBackdropClick}
    >
      <button
        type="button"
        className="dialog-close"
        data-dialog-close=""
        aria-label="Close API details"
        ref={closeRef}
        onClick={() => dialogRef.current?.close()}
      >
        ×
      </button>
      <div id="product-dialog-body">
        {product && (
          <>
            <Eyebrow>{product.category}</Eyebrow>
            <h2 id="product-dialog-title">{product.name}</h2>
            <p className="lead">{product.therapy} API</p>
            <div className="detail-field">
              <small>Published forms / standards</small>
              <div className="molecule-forms">
                {product.forms.map((form) => (
                  <span key={form}>{form}</span>
                ))}
              </div>
            </div>
            <div className="detail-field">
              <small>Discuss with our team</small>
              <p>{productDialogCopy.discuss}</p>
            </div>
            <p className="small-note">{productDialogCopy.note}</p>
            <div className="buttons">
              <GoLink to={productEnquiryRoute(product)}>Request technical information</GoLink>
              <ExtLink href={product.source}>Published reference</ExtLink>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
