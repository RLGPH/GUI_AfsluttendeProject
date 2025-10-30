import { Link } from "react-router-dom";
import "./Products.css";
import HoldUp from "../../assets/holdup.jpg"

const Products = ({ id, title, description, price, image }) => {
  const baseUrl = "http://casp142b.web.techcollege.dk";

  return (
    <div className="card">
      <img
        className="card__image"
        src={`${baseUrl}${image?.imageUrl || HoldUp}`}
        alt={image?.imageName || "Product image"}
        onError={(e) => {
          if (!e.target.dataset.fallback) {
            e.target.dataset.fallback = "true";
            e.target.src = HoldUp
          }
        }}
      />

      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <p className="card__price">Pris: {price} kr</p>
      <Link to={`/ProductsPage/${id}`}>Læs Mere</Link>
    </div>
  );
};

export default Products;
