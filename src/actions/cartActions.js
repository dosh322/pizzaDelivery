export const addPizza = (pizza) => ({
    type: 'ADD_PIZZA',
    payload: pizza,
});

export const removePizza = (pizza) => ({
    type: 'REMOVE_PIZZA',
    payload: pizza,
});

export const removeAllPizzaByType = (pizza) => ({
    type: 'REMOVE_PIZZA_BY_TYPE',
    payload: pizza,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});
