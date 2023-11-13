export default function RecommendedProducts({ html, state }) {
  const { recommendedProducts, path } = state.store;
  // the data that is fetched is in the page.tsx in the next app. they are fetching data in 'props' of components
  let productsList = recommendedProducts
    .map((product) => {
      return html` <div class="col-span-2 md:col-span-1">
        <product-card
          product_id="${product.id}"
          path="${path}/${product.id}"
        ></product-card>
      </div>`;
    })
    .join("\n");

  return html`
    <div class="space-y-6">
      <div>
        <div class="text-lg font-medium text-white">
          Recommended Products for You
        </div>
        <div class="text-sm text-gray-400">
          Based on your preferences and shopping habits
        </div>
      </div>
      <div class="grid grid-cols-4 gap-6">${productsList}</div>
    </div>
  `;
}
