const Recipe = ({ title, description, image, alt }) => {
  return (
    <>
      <li className="Product-grid-item">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={alt}></img>
        
      </li>
    </>
  );
};

export default Recipe;