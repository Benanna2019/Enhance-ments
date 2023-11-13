export default function Skeleton({ html }) {
  return html`
    <div class="space-y-4">
      <div class="h-6 w-2/6 rounded-lg bg-gray-900"></div>
      <div class="h-4 w-1/6 rounded-lg bg-gray-900"></div>
      <div class="h-4 w-full rounded-lg bg-gray-900"></div>
      <div class="h-4 w-4/6 rounded-lg bg-gray-900"></div>
    </div>
  `;
}
