export default function LoadingDots({ html }) {
  return html`
    <div class="text-sm">
      <span class="space-x-0.5">
        <span
          class="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full"
        >
          &bull;
        </span>
        <span
          class="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full"
        >
          &bull;
        </span>
        <span
          class="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full"
        >
          &bull;
        </span>
      </span>
    </div>
  `;
}
