import { GoLink } from "../ui/index.js";

export const productEnquiryRoute = (product) => `contact?service=API&product=${encodeURIComponent(product.name)}`;

// Molecule tile in the API explorer grid. `onDetail(product, triggerElement)` opens the dialog.
export function ProductCard({ product, onDetail }) {
  const open = (event) => onDetail(product, event.currentTarget);
  return (
    <article className="molecule-card" data-product-id={product.id}>
      <div className="molecule-card-top">
        <span className="molecule-category">{product.category}</span>
        <span className="molecule-mark" aria-hidden="true">
          API
        </span>
      </div>
      <h3>
        <button type="button" data-product-detail={product.id} onClick={open}>
          {product.name}
        </button>
      </h3>
      <p className="molecule-therapy">{product.therapy}</p>
      <div className="molecule-forms">
        <span>{product.forms[0]}</span>
        {product.forms.length > 1 && <span>+{product.forms.length - 1} form</span>}
      </div>
      <div className="molecule-card-actions">
        <button className="text-link" type="button" data-product-detail={product.id} onClick={open}>
          Details <span aria-hidden="true">↗</span>
        </button>
        <GoLink to={productEnquiryRoute(product)} className="product-enquire">
          Enquire
        </GoLink>
      </div>
    </article>
  );
}
