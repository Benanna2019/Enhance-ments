import { toUnit, dinero } from "dinero.js";
import { formatDiscount } from "../lib/utils.mjs";

export default function ProductPrice({ html, state }) {
  // I might need these from the store as data
  const { singleProduct, recommendedProducts } = state.store;
  const combinedProducts = [singleProduct, ...recommendedProducts];
  const { product_id } = state.attrs;

  const product = combinedProducts.filter(
    (product) => product.id === product_id
  );

  const price = product[0].price;
  const discountRaw = product[0].discount;

  const discount = formatDiscount(dinero(price), discountRaw);

  if (discount) {
    if (discount?.expires && typeof discount.expires === "number") {
      return html`<div class="space-y-4">
        <product-lightening-deal
          product_id="${product_id}"
        ></product-lightening-deal>
      </div>`;
    }
    return html`<div class="space-y-4">
      <product-deal product_id="${product_id}"></product-deal>
    </div>`;
  }

  return html`
    <div class="flex">
      <div class="text-sm leading-snug text-white">
        <product-currency-symbol
          product_id="${product_id}"
        ></product-currency-symbol>
      </div>
      <div class="text-lg font-bold leading-snug text-white">
        ${toUnit(dinero(price))}
      </div>
    </div>
  `;
}
