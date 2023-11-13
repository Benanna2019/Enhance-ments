import { allocate, toUnit, up, dinero } from "dinero.js";

export default function ProductSplitPayments({ html, state }) {
  const { userSpecificDetailsData } = state.store;
  let price = userSpecificDetailsData.price;
  const { product_id } = state.attrs;

  let allocatePrice = {
    amount: price.amount,
    currency: price.currency,
  };

  // only offer split payments for more expensive items
  // if (toUnit(dinero(price)) < 150) {
  //   return null;
  // }

  const [perMonth] = allocate(dinero(allocatePrice), [1, 2]);
  return html`
    <div class="text-sm text-gray-400">
      Or
      <product-currency-symbol
        product_id="${product_id}"
      ></product-currency-symbol>
      <!-- ${toUnit(perMonth, { digits: 0, round: up })}/month for 3 months -->
    </div>
  `;
}
