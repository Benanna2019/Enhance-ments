export default function Reviews({ html, state }) {
  const { reviews } = state.store;

  let reviewsList = reviews
    .map((review) => {
      return html`<div class="space-y-8">
        <product-review-card review_id="${review.id}"></product-review-card>
      </div>`;
    })
    .join("\n");

  return html`
    <div class="space-y-6">
      <div class="text-lg font-medium text-white">Customer Reviews</div>
      <div class="space-y-8">${reviewsList}</div>
    </div>
  `;
}
