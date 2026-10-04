import { apiCategories, products } from "@morepen/shared";
import { LineIcon } from "../ui/index.js";

const countFor = (name) => products.filter((product) => product.category === name).length;

// Therapeutic-area tabs: "All APIs" plus one tab per category, with counts.
export function ApiCategoryNav({ active, onSelect }) {
  const tabs = [
    { name: "All", label: "All APIs", icon: "shield", count: `${products.length} molecules` },
    ...apiCategories.map((category) => ({
      name: category.name,
      label: category.name,
      icon: category.icon,
      count: `${countFor(category.name)} APIs`
    }))
  ];

  return (
    <div className="api-category-nav-v44" role="group" aria-label="Filter API collection">
      {tabs.map((tab) => {
        const isActive = tab.name === active;
        return (
          <button
            key={tab.name}
            className={`api-category-tab-v44${isActive ? " active" : ""}`}
            data-product-filter={tab.name}
            aria-pressed={isActive}
            aria-controls="api-grid"
            onClick={() => onSelect(tab.name)}
          >
            <span className="api-category-icon-v44">
              <LineIcon name={tab.icon} />
            </span>
            <span className="api-category-label-v44">{tab.label}</span>
            <span className="api-category-count-v44">{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
}
