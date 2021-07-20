export const pizzasSelector = (state) => state.pizzas.items;

export const isLoadingSelector = (state) => state.pizzas.isLoading;

export const cartSelector = (state) => state.cart;

export const pizzasByIdCountSelector = (id) => (state) =>
    state.cart.items[id]?.length ?? 0;

export const pizzasInCartSelector = (state) => Object.values(state.cart.items);

export const pizzasByIdSelector = (id) => (state) =>
    Object.entries(state.cart.items)
        .filter(([key]) => key.startsWith(id))
        .map(([key, value]) => value);
