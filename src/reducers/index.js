import { combineReducers } from 'redux';
import filters from '../reducers/filters';
import pizzas from '../reducers/pizzas';
import cart from '../reducers/cart';

const reducers = combineReducers({
    pizzas,
    filters,
    cart,
});

export default reducers;
