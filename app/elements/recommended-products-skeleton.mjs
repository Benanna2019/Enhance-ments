export default function RecommendedProductsSkeleton({ html }) {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

  return html`
    <div class="space-y-6 pb-[5px]">
      <div class="space-y-2">
        <div class="h-6 w-1/3 rounded-lg bg-gray-900 ${shimmer}" />
        <div class="h-4 w-1/2 rounded-lg bg-gray-900 ${shimmer}" />
      </div>

      <div class="grid grid-cols-4 gap-6">
        <product-skeleton></product-skeleton>
        <product-skeleton></product-skeleton>
        <product-skeleton></product-skeleton>
        <product-skeleton></product-skeleton>
      </div>
    </div>
  `;
}
