export default function AddToCart({ html, state }) {
  return html`
    <form method="post" action="/">
      <button
        class="relative w-full items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1 text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
      >
        Add to Cart
      </button>
    </form>
    <script type="module" src="/_public/add-to-cart.mjs"></script>
  `;
}
