import { dinero } from "dinero.js";

export default function UserSpecificDetails({ html, state }) {
  const { userSpecificDetailsData } = state.store;
  const { product_id } = state.attrs;

  const product = userSpecificDetailsData;

  // const price = dinero(product.price);

  const usedPrice = product.usedPrice
    ? `<product-used-price usedPrice="${product.usedPrice}"></product-used-price>`
    : null;
  const stock =
    product.stock <= 1
      ? `<product-lowstock-warning
      stock="${product.stock}"
    ></product-lowstock-warning>`
      : null;

  return html`
    <!-- <product-split-payments product_id="${product_id}"></product-split-payments> -->
    ${usedPrice}
    <div>
      <product-estimated-arrival
        lead_time="${product.leadTime}"
        has_delivery_time="true"
      ></product-estimated-arrival>
    </div>
    ${stock}
  `;
}
