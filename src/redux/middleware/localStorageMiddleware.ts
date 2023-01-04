export const localMiddleware = (state: any) => (next: any) => (action: any) => {
  const res = next(action);
  const items = state.getState().cart.items;
  if (action.type.startsWith("@@/cart")) {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
  return res;
};

export const reHydrateStore = () => {
  const res = localStorage.getItem("cartItems");
  console.log(res);
  if (res !== null) {
    return JSON.parse(res);
  } else {
    return [];
  }
};
