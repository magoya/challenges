import React, { useState } from 'react';
import './Item.css'

function Item(props) {
  // items are inactive by default
  const [active, setActive] = useState(false);

  return (
    <li className={active?"Item active":"Item inactive"}>
      <input onClick={() => setActive(!active)} type='checkbox'></input>
      <span>{props.label}</span>
    </li>
  );
}

export default Item