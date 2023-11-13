import { add, formatDistanceToNow } from "date-fns";
import { dinero } from "dinero.js";
import { formatDiscount } from "../lib/utils.mjs";

export default function ProductLighteningDeal({ html, state }) {
  const { singleProduct, recommendedProducts } = state.store;
  const combinedProducts = [singleProduct, ...recommendedProducts];
  const { product_id } = state.attrs;

  const product = combinedProducts.filter(
    (product) => product.id === product_id
  );
  const price = product[0].price;
  const discountRaw = product[0].discount;

  const discount = formatDiscount(dinero(price), discountRaw);
  const date = add(new Date(), { days: discount.expires });

  return html`
    <div class="space-y-4">
      <div class="flex">
        <div
          class="rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white"
        >
          Expires in ${formatDistanceToNow(date)}
        </div>
      </div>

      <div>
        <product-deal product_id="${product_id}"></product-deal>
      </div>
    </div>
  `;
}
