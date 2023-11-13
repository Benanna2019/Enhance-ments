export default function ReviewsSkeleton({ html, state }) {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

  return html`
    <div class="space-y-6">
      <div class="h-7 w-2/5 rounded-lg bg-gray-900 ${shimmer}" />

      <div class="space-y-8">
        <loading-skeleton></loading-skeleton>
        <loading-skeleton></loading-skeleton>
      </div>
    </div>
  `;
}
