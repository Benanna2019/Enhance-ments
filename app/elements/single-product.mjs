//prettier-ignore
export default function SingleProduct({ html, state }) {
  const { singleProduct } = state.store;

  return html`
    <div class="grid grid-cols-4 gap-6">
      <div class="col-span-2 md:order-1 md:col-span-1">
        <div class="space-y-2">
          <img
            src="/_public/images/${singleProduct.image}"
            class="block rounded-lg grayscale h-[400] w-[400]"
            alt="${singleProduct.name}"
          >

          <div class="flex gap-x-2">
            <div class="w-1/3">
              <img
                src="/_public/images/${singleProduct.image}"
                class="rounded-lg grayscale h-[180] w-[180] "
                alt="${singleProduct.name}"
              >
            </div>
            <div class="w-1/3">
              <img
                src="/_public/images/${singleProduct.image}"
                class="rounded-lg grayscale h-[180] w-[180] "
                alt="${singleProduct.name}"
              >
            </div>
            <div class="w-1/3">
              <img
                src="/_public/images/${singleProduct.image}"
                class="rounded-lg grayscale h-[180] w-[180] "
                alt="${singleProduct.name}"
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:order-3 md:col-span-1">
        <pricing-info product_id="${singleProduct.id}"></pricing-info>
      </div>

      <div class="col-span-full space-y-4 md:order-2 md:col-span-2">
        <div class="truncate text-xl font-medium text-white lg:text-2xl">
          ${singleProduct.name}
        </div>

        <div>
        <product-rating rating="${singleProduct.rating}"></product-rating>
        </div>

        <div class="space-y-4 text-sm text-gray-200">
          <p>${singleProduct.description}</p>
          <p>${singleProduct.description}</p>
        </div>
      </div>
    </div>
  `;
}
