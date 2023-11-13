export default function ProductLowStockWarning({ html, state }) {
  const { stock } = state.attrs;
  const stockFormatted = stock;
  if (stockFormatted > 3) {
    return null;
  }

  if (stockFormatted === 0) {
    return html`<div class="text-sm text-vercel-cyan">Out of stock</div>`;
  }

  return html`
    <div class="text-sm text-vercel-cyan">
      Only ${stockFormatted} left in stock
    </div>
  `;
}
