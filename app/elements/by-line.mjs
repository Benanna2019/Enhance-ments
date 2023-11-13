export default function ByLine({ html, state }) {
  const { styles } = state.attrs;
  return html`
    <div
      class="${styles} inset-x-0 bottom-3 mx-3 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20"
    >
      <div
        class="flex flex-row justify-between rounded-lg bg-black p-3.5 lg:px-5 lg:py-3"
      >
        <div class="flex items-center gap-x-1.5">
          <div class="text-sm text-gray-400">By</div>
          <a href="https://vercel.com" title="Vercel">
            <div class="w-16 text-gray-100 hover:text-gray-50">
              <begin-logo class="text-white"></begin-logo>
            </div>
          </a>
        </div>

        <div class="text-sm text-gray-400">
          <a
            class="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://github.com/vercel-labs/next-partial-prerendering"
            target="_blank"
            rel="noreferrer"
          >
            View code
          </a>
        </div>
      </div>
    </div>
  `;
}
