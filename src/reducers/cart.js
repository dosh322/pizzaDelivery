import { getPizzaId } from '../helpers';

const initState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
};

const cart = (state = initState, { type, payload }) => {
    switch (type) {
        case 'ADD_PIZZA': {
            const pizzaId = getPizzaId(payload);
            return {
                ...state,
                items: {
                    ...state.items,
                    [pizzaId]: {
                        ...payload,
                        counter: (state.items[pizzaId]?.counter ?? 0) + 1,
                    },
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + payload.price,
            };
        }
        case 'REMOVE_PIZZA': {
            const pizzaId = getPizzaId(payload);

            if (state.items[pizzaId].counter === 1) {
                return state;
            }

            return {
                ...state,
                items: {
                    ...state.items,
                    [pizzaId]: {
                        ...payload,
                        counter: state.items[pizzaId].counter - 1,
                    },
                },
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - payload.price,
            };
        }
        case 'REMOVE_PIZZA_BY_TYPE': {
            const pizzaId = getPizzaId(payload);
            return {
                ...state,
                items: {
                    ...Object.keys(state.items)
                        .filter((key) => key !== pizzaId)
                        .reduce(
                            (acc, key) => ({ ...acc, [key]: state.items[key] }),
                            {}
                        ),
                },
                totalCount: state.totalCount - payload.counter,
                totalPrice: state.totalPrice - payload.price * payload.counter,
            };
        }
        case 'CLEAR_CART':
            return { ...initState };
        default:
            return state;
    }
};

export default cart;
