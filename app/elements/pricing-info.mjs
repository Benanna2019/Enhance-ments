// need to maybe pass an id or something to get the pricing info by an id
// Why? We cannot pass objects through custom element attributes

// get the single product from the store

export default function Pricing({ html, state }) {
  const { attrs } = state;
  const { product_id } = attrs;
  return html`
    <div class="space-y-4 rounded-lg bg-gray-900 p-3">
      <div>
        <product-price product_id="${product_id}"></product-price>
      </div>

      <div>
        <p-ing></p-ing>

        <user-specific-details
          product_id="${product_id}"
        ></user-specific-details>
      </div>
      <div>
        <add-to-cart></add-to-cart>
      </div>
    </div>
  `;
}
