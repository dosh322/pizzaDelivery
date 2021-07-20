import axios from 'axios';

export const setPizzas = (payload) => ({
    type: 'SET_PIZZAS',
    payload,
});

const getPizzas = () => ({
    type: 'GET_PIZZAS',
});

export const fetchPizzas =
    ({ sortBy, category }) =>
    async (dispatch) => {
        dispatch(getPizzas());
        const { data } = await axios.get('/pizzas', {
            params: {
                ...(category && { category }),
                _sort: sortBy.type,
                _order: sortBy.order,
            },
        });
        dispatch(setPizzas(data));
    };
