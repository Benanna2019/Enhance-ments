export async function get(req) {
  let productId = 1;
  let count = req.session.count || 0;
  let path = req.path;
  let isOpen = req.session.isOpen || false;

  const singleProductData = await fetch(
    `https://app-router-api.vercel.app/api/products?id=1`
  ).then((res) => res.json());

  const userSpecificDetailsData = await fetch(
    `https://app-router-api.vercel.app/api/products?id=${productId}&filter=price,usedPrice,leadTime,stock`
  ).then((res) => res.json());

  const recommendedProducts = await fetch(
    // We intentionally delay the response to simulate a slow data
    // request that would benefit from streaming
    `https://app-router-api.vercel.app/api/products?filter=1`
  ).then((res) => res.json());

  const reviews = await fetch(
    // We intentionally delay the response to simulate a slow data
    // request that would benefit from streaming
    `https://app-router-api.vercel.app/api/reviews`
  ).then((res) => res.json());

  return {
    session: { count, isOpen },
    json: {
      singleProduct: singleProductData,
      userSpecificDetailsData,
      recommendedProducts,
      reviews,
      count,
      path,
      isOpen,
    },
  };
}

export async function post(req) {
  let count = req.session.count || 0;
  count += 1;
  return {
    session: { count },
    json: { count },
    location: "/",
  };
}
