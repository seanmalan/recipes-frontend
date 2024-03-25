import React from "react";
import "./KitchenListItem.css";
import { Link } from "react-router-dom";

const ListItem = ({ kitchen }) => {
  return (
    <div className="kitchen-list-item-container">
    <Link to={`/kitchens/${kitchen.id}`}>

      <h3>{kitchen.name}</h3>
      <p>{kitchen.description}</p>
    </Link>
    </div>
  );
};

export default ListItem;
