import { Categories, Sorting } from '../components';
import { PizzaBlock, PizzaPlaceholder } from '../components/PizzaBlock';
import { useDispatch, useSelector } from 'react-redux';
import { filtersSelector } from '../selectors/filterSelectors';
import {
    isLoadingSelector,
    pizzasSelector,
} from '../selectors/pizzasSelectors';
import { setCategory } from '../actions/filterActions';
import { useCallback, useEffect, useMemo } from 'react';
import { fetchPizzas } from '../actions/pizzaActions';
import { addPizza } from '../actions/cartActions';

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(pizzasSelector);
    const isLoading = useSelector(isLoadingSelector);
    const filters = useSelector(filtersSelector);
    const categories = useMemo(
        () => [
            { id: 0, title: 'Все' },
            { id: 1, title: 'Мясные' },
            { id: 2, title: 'Вегетарианские' },
            { id: 3, title: 'Гриль' },
            { id: 4, title: 'Острые' },
            { id: 5, title: 'Закрытые' },
        ],
        []
    );

    useEffect(() => {
        dispatch(fetchPizzas(filters));
    }, [dispatch, filters]);

    const handleSelectCategory = useCallback((category) => {
        dispatch(setCategory(category));
    }, []);

    const handleAddBtn = useCallback((pizza) => {
        dispatch(addPizza(pizza));
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onCategoryClick={handleSelectCategory}
                    items={categories}
                    activeCategory={filters.category}
                />
                <Sorting
                    items={[
                        { name: 'популярности', type: 'rating', order: 'desc' },
                        { name: 'алфавиту', type: 'name', order: 'asc' },
                        { name: 'цене', type: 'price', order: 'asc' },
                    ]}
                    activeSortPref={filters.sortBy}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? Array(9).fill(<PizzaPlaceholder />)
                    : pizzas.map((pizza) => (
                          <PizzaBlock
                              key={pizza.id}
                              onClick={handleAddBtn}
                              {...pizza}
                          />
                      ))}
            </div>
        </div>
    );
};

export default Home;
