import { useState } from "react";
import "./Item.css";

const Item = ({ label }) => {
  // items are inactive by default
  const [active, setActive] = useState(false);

  return (
    <li className={active ? "Item active" : "Item inactive"}>
      <input onClick={() => setActive(!active)} type="checkbox"></input>
      <span>{label}</span>
    </li>
  );
};

export default Item;
