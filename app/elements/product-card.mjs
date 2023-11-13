import { dinero } from "dinero.js";
// I need to send along all product info rather than just the product.

// custom elements cannot receive objects as attributes
export default function ProductCard({ html, state }) {
  // get all product attributes off of the state.attrs

  const { product_id } = state.attrs;
  const { recommendedProducts } = state.store;
  const product = recommendedProducts.filter(
    (product) => product.id === product_id
  );
  const price = dinero(product[0].price);

  let bestSeller = product[0].isBestSeller
    ? `<div class="absolute left-2 top-2 z-10 flex">
    <product-best-seller></product-best-seller>
  </div>`
    : null;

  let rating = product[0].rating
    ? `<product-rating rating="${product[0].rating}"></product-rating>`
    : null;

  let usedPrice = product[0].usedPrice
    ? `<product-used-price usedPrice=${product[0].usedPrice}></product-used-price>`
    : null;

  let stock =
    product[0].stock <= 1
      ? `<product-lowstock-warning stock="${product[0].stock}"></product-lowstock-warning>`
      : null;

  return html`
    <div class="group block">
      <div class="space-y-2">
        <div class="relative">
          ${bestSeller}
          <img
            src="/_public/images/${product[0].image}"
            class="rounded-xl grayscale group-hover:opacity-80 h-[400] w-[400]"
            alt="${product[0].name}"
          />
        </div>

        <div
          class="truncate text-sm font-medium text-white group-hover:text-vercel-cyan"
        >
          ${product[0].name}
        </div>

        <div>${rating}</div>

        <div>
          <product-price product_id="${product[0].id}"></product-price>
        </div>

        <!-- <product-split-payments price="${price}"></product-split-payments> -->

        <div>${usedPrice}</div>

        <div>
          <product-estimated-arrival
            lead_time="${product[0].leadTime}"
          ></product-estimated-arrival>
        </div>

        <div>${stock}</div>
      </div>
    </div>
  `;
}
