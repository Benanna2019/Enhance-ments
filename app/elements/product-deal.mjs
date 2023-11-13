//ts-check
import { toUnit, dinero } from "dinero.js";
import { formatDiscount } from "../lib/utils.mjs";

export default function ProductDeal({ html, state }) {
  const { singleProduct, recommendedProducts } = state.store;
  const combinedProducts = [singleProduct, ...recommendedProducts];
  const { product_id } = state.attrs;

  const product = combinedProducts.filter(
    (product) => product.id === product_id
  );

  const productPrice = product[0].price;
  const discountRaw = product[0].discount;

  const discountFormatted = formatDiscount(dinero(productPrice), discountRaw);

  const discount = toUnit(discountFormatted.amount);
  const price = toUnit(dinero(productPrice));
  const percent = Math.round(100 - (discount / price) * 100);

  return html`
    <div class="flex gap-x-1.5">
      <div class="text-lg font-bold leading-snug text-vercel-cyan">
        -${percent}%
      </div>
      <div class="flex">
        <div class="text-sm leading-snug text-white">
          <product-currency-symbol
            product_id="${product_id}"
            discount
          ></product-currency-symbol>
        </div>
        <div class="text-lg font-bold leading-snug text-white">${discount}</div>
      </div>
      <div class="text-sm leading-snug text-gray-400 line-through">
        <product-currency-symbol
          product_id="${product_id}"
        ></product-currency-symbol>
        ${price}
      </div>
    </div>
  `;
}
