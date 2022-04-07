import './List.css';
import Item from './Item'

function List(props) {
  
  return (
    <ul className="List">
        { props.items.map(item => <Item label={item}/>)}
    </ul>
  );
}

export default List;
