export default function ProductReviewCard({ html, state }) {
  const { review_id } = state.attrs;
  const { reviews } = state.store;
  const review = reviews.filter((review) => review.id === review_id);
  let productRating = review[0].rating
    ? `
    <product-rating rating="${review[0].rating}"></product-rating>
  `
    : null;
  return html`
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="flex items-center gap-x-2">
          <div class="h-6 w-6 rounded-full bg-gray-700"></div>
          <div class="text-sm text-white">${review[0].name}</div>
        </div>
        <div>${productRating}</div>
      </div>

      <div class="text-gray-400">${review[0].text}</div>
    </div>
  `;
}
