export default function Header({ html }) {
  return html`
    <div
      class="flex items-center justify-between gap-x-3 rounded-lg bg-gray-800 px-3 py-3 lg:px-5 lg:py-4"
    >
      <div class="flex gap-x-3">
        <div class="h-10 w-10 hover:opacity-70">
          <enhance-logo></enhance-logo>
        </div>

        <div class="relative flex-1">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <magnifying-glass-icon
              class="h-5 w-5 text-gray-300"
            ></magnifying-glass-icon>
          </div>
          <input
            aria-label="Search"
            type="search"
            name="search"
            id="search"
            class="block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="flex shrink-0 gap-x-3">
        <div
          class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600 text-white"
        >
          <shopping-cart-icon class="w-6 text-white"></shopping-cart-icon>
          <div
            class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-vercel-cyan text-sm font-bold text-cyan-800"
          >
            <cart-count></cart-count>
          </div>
        </div>

        <img
          src="/_public/images/prince-akachi-LWkFHEGpleE-unsplash.jpg"
          class="rounded-full h-10 w-10"
          alt="User"
        />
      </div>
    </div>
  `;
}
