import Item from "./Item";
import "./List.css";

const List = ({ items }) => (
  <ul className="List">
    {items.map((item, index) => (
      <Item label={item} key={`list_item_${index}`} />
    ))}
  </ul>
);

export default List;
