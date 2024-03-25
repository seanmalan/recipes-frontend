import React from "react";
import "./KitchenListItem.css";

const ListItem = ({ kitchen }) => {
  return (
    <div className="kitchen-list-item-container">
    <a href="#">

      <h3>{kitchen.name}</h3>
      <p>{kitchen.description}</p>
    </a>
    </div>
  );
};

export default ListItem;
