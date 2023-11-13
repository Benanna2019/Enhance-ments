export default function ProductSkeleton({ html }) {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;
  return html`
    <div class="col-span-4 space-y-4 lg:col-span-1">
      <div class="relative h-[167px] rounded-xl bg-gray-900 ${shimmer}" />

      <div class="h-4 w-full rounded-lg bg-gray-900" />
      <div class="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div class="h-4 w-full rounded-lg bg-gray-900" />
      <div class="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  `;
}
