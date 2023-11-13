import { dinero, toUnit, up } from "dinero.js";

export default function ProductUsedPrice({ html, state }) {
  const { userSpecificDetailsData } = state.store;
  const { usedPrice: usedPriceRaw } = userSpecificDetailsData;
  const usedPrice = dinero(usedPriceRaw);

  return html`
    <div class="text-sm">
      <div class="text-gray-400">More buying choices</div>
      <div class="text-gray-200">
        ${toUnit(usedPrice, { digits: 0, round: up })} (used)
      </div>
    </div>
  `;
}
