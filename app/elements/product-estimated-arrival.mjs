import { add, format, isTomorrow } from "date-fns";

export default function ProductEstimatedArrival({ html, state }) {
  const { lead_time, has_delivery_time } = state.attrs;
  const date = add(new Date(), {
    days: lead_time,
  });

  let deliveryTime = has_delivery_time ? html`<span> by 5pm</span>` : null;

  return html`
    <div class="text-sm text-gray-300">
      Get it
      <strong class="font-bold text-gray-100">
        ${isTomorrow(date) ? "tomorrow, " : null} ${format(date, "MMM d")}
      </strong>
      ${deliveryTime}
    </div>
  `;
}
