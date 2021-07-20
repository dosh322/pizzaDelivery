const initState = {
    sortBy: { name: 'популярности', type: 'rating', order: 'desc' },
    category: 0,
};

const filters = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SORTING':
            return { ...state, sortBy: action.payload };
        case 'SET_CATEGORY':
            return { ...state, category: action.payload };
        default:
            return state;
    }
};

export default filters;
