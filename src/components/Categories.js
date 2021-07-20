import { memo } from 'react';

const Categories = memo(({ items, onCategoryClick, activeCategory }) => {
    return (
        <div className="categories">
            <ul>
                {items.map(({ title, id }) => (
                    <li
                        key={id}
                        onClick={() => {
                            onCategoryClick(id);
                        }}
                        className={activeCategory === id ? 'active' : null}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;
