export default function CartCount({ html, state }) {
  const { count } = state.store;
  return html`<span id="cart-count">${count}</span>`;
}
