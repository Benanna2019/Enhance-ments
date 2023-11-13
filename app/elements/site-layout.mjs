export default function SiteLayout({ html, state }) {
  // ${GeistSans.variable}

  return html` <main
    class="overflow-y-scroll bg-gray-1100 bg-[url('/_public/images/grid.svg')] pb-36"
  >
    <side-bar></side-bar>
    <div class="lg:pl-72">
      <div class="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
        <div
          class="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20"
        >
          <div class="rounded-lg bg-black p-3.5 lg:p-6">
            <div class="space-y-10">
              <my-header></my-header>

              <slot name="main-section" as="div"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>`;
}
