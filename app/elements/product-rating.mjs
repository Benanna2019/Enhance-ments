export default function ProductRating({ html, state }) {
  const { rating } = state.attrs;

  let stars = Array.from({ length: 5 })
    .map((_, i) => {
      let styles = i < rating ? `text-white` : `text-gray-500`;

      return html` <star-icon class="w-4 ${styles}"></star-icon> `;
    })
    .join("\n");
  return html` <div class="flex gap-x-1">${stars}</div> `;
}
