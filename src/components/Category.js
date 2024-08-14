import Widget from './Widget';
import '../App.css';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="category-widgets">
        {category.widgets.map(widget => (
          <Widget key={widget.name} widget={widget} categoryName={category.name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
