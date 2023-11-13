import {
  delayRecommendedProducts,
  delayReviews,
  delayShippingEstimate,
} from "../lib/constants.mjs";

export default function Sidebar({ html, state }) {
  const { isOpen } = state.store;

  let iconRenderer = isOpen
    ? html`<xmark-icon class="text-white"></xmark-icon>`
    : html` <bars3-icon class="text-white"></bars3-icon>`;

  return html`
    <style>
      :host {
        --nav-bar-height: 4rem;
      }

      .navBarHeight {
        block-size: var(--nav-bar-height);
      }

      #mobile-nav {
        background-color: var(--pink-700);
        inset-block-start: var(--nav-bar-height);
        overflow-y: scroll;
        transition: inset-inline-start 0.2s ease;
      }

      #burger-control {
        display: block;
        position: absolute;
        opacity: 0;
        block-size: 0.0001px;
        inline-size: 0.0001px;
      }

      #burger-control:checked ~ #mobile-nav {
        display: block;
        inset-inline-start: 0vw;
      }

      @media only screen and (min-width: 18em) {
        #mobile-nav {
          -webkit-transition: initial;
          transition: initial;
        }

        #burger-control:checked ~ #mobile-nav {
          display: none;
        }
      }
    </style>
    <div
      class="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800"
    >
      <div class="flex h-14 items-center px-4 py-4 lg:h-auto">
        <div class="group flex w-full items-center gap-x-2.5">
          <div class="h-7 w-7 rounded-full border border-white/30">
            <enhance-logo class="text-white"></enhance-logo>
          </div>

          <h3 class="font-semibold tracking-wide text-gray-400">
            Partial Prerendering
          </h3>
        </div>
      </div>

      <input
        class="group top-0 opacity-0 hidden"
        id="burger-control"
        type="checkbox"
        name="open-burger"
        hidden
        autocomplete="off"
        aria-label="Open navigation"
      />
      <label
        class="absolute right-0 top-0 flex h-14 items-center text-white gap-x-2 px-4 lg:hidden pe-0 cursor-pointer"
        for="burger-control"
        title="Open navigation"
      >
        <div class="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        ${iconRenderer}
      </label>
      <!--   <input
          id="burger-control"
          class=" absolute opacity-0 z-10"
          type="checkbox"
          name="open-burger"
          autocomplete="off"
          aria-label="Open navigation"
        />
        <label
          class="relative right-0 top-0 flex h-14 items-center text-white gap-x-2 px-4 lg:hidden border-red-500 border-2"
          for="burger-control"
          title="Open navigation"
        >
        
          <svg class="text-white" height="24" width="24" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <use xlink:href="#svg-hamburger">
          </svg>
        </label> -->

      <div
        id="mobile-nav"
        class="overflow-y-scroll lg:static lg:block inset-x-0 bottom-0 top-14 mt-px bg-black"
      >
        <div
          class="prose prose-sm prose-invert max-w-none space-y-6 px-4 pb-20 text-gray-300"
        >
          <div class="text-gray-400">
            <p>
              <span class="font-bold text-vercel-pink">Pink dots </span>
              denote artificially delayed responses for demo purposes:
            </p>
            <ul>
              <li>Shipping estimate → ${delayShippingEstimate}ms</li>
              <li>Recommended products → ${delayRecommendedProducts}ms</li>
              <li>Reviews → ${delayReviews}ms</li>
            </ul>
          </div>

          <p>
            <a
              target="_blank"
              href="https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model"
            >
              Partial Prerendering
            </a>
            is useful for pages where unique, per-request data coexists with
            static elements such as sidebars or layouts. This is different from
            how your application behaves today, where entire routes are either
            fully static or dynamic.
          </p>
          <p>How it works:</p>
          <ul>
            <li>
              A static route <em>shell</em> is served immediately, this makes
              the initial load fast.
            </li>
            <li>
              The shell leaves <em>holes</em> where dynamic content (that might
              be slower) will be streamed in to minimize the perceived overall
              page load time.
            </li>
            <li>
              The async holes are loaded in parallel, reducing the overall load
              time of the page.
            </li>
            <li>
              <a
                target="_blank"
                href="https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model"
              >
                More Info
              </a>
            </li>
          </ul>
          <p class="text-gray-400">
            Try refreshing the page to restart the demo.
          </p>
        </div>
        <by-line styles="absolute hidden sm:block"></by-line>
      </div>
    </div>
  `;
}
