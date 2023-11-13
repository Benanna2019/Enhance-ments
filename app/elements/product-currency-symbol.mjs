import { toFormat, dinero } from "dinero.js";

export default function ProductCurrencySymbol({ html, state }) {
  const { product_id, discount } = state.attrs;
  const { singleProduct, recommendedProducts } = state.store;
  const combinedProducts = [singleProduct, ...recommendedProducts];

  const product = combinedProducts.filter(
    (product) => product.id === product_id
  );

  let price;

  if (discount) {
    price = product[0].discount;
  }

  if (!discount) {
    price = product[0].price;
  }

  let symbol = "";
  switch (toFormat(dinero(price), ({ currency }) => currency.code)) {
    case "GBP": {
      symbol = "£";
      break;
    }

    case "EUR": {
      symbol = "€";
      break;
    }

    default: {
      symbol = "$";
      break;
    }
  }

  return html`<span>${symbol}</span>`;
}
