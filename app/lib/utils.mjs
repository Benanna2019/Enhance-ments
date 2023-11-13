import { multiply } from "dinero.js";

function isDiscount(obj) {
  return typeof obj?.percent === "number";
}

export function formatDiscount(price, discountRaw) {
  return isDiscount(discountRaw)
    ? {
        amount: multiply(price, {
          amount: discountRaw.percent,
          scale: 2,
        }),
        expires: discountRaw.expires,
      }
    : undefined;
}
