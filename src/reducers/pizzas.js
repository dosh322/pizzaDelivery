const initState = {
    items: [],
    isLoading: false,
};

const filters = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return { isLoading: false, items: action.payload };
        case 'GET_PIZZAS':
            return { ...state, isLoading: true };
        default:
            return state;
    }
};

export default filters;
