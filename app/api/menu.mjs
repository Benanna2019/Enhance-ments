export async function post(req) {
  let isOpen = req.session.isOpen;
  let count = req.session.count || 0;
  console.log("req.session.isOpen", isOpen);
  return {
    session: { isOpen: !isOpen, count },
    json: { isOpen: !isOpen, count },
    location: "/",
  };
}
