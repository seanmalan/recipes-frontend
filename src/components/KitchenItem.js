import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./KitchenItem.css";

const Kitchen = () => {
  const { id } = useParams();
  const [kitchen, setkitchen] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(``);

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();
      setkitchen(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p>"Sorry we can not find that kitchen!"</p>
        <Link to={`/`} className="button">
          Return to kitchens
        </Link>
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="kitchen-item">
        <div>
          <h2>{kitchen.name}</h2>
          <p>{kitchen.description}</p>
        </div>
      </div>
      <h2>Reserve {kitchen.name}</h2>
      <p></p>
    </>
  );
};

export default Kitchen;
