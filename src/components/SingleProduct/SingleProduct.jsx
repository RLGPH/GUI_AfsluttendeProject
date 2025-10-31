import React from "react";
import "./SingleProduct.css"
import HoldUp from "../../assets/holdup.jpg";

const baseUrl = "http://casp142b.web.techcollege.dk";

const SingleProduct = ({ product, onBack }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.productName}</h1>

      <img
        src={`${baseUrl}${product.image?.imageUrl || HoldUp}`}
        alt={product.productName}
        onError={(e) => {
          if (!e.target.dataset.fallback) {
            e.target.dataset.fallback = "true";
            e.target.src = HoldUp;
          }
        }}
        className="image"
      />

      <p>
        <strong>Pris:</strong> {product.productPrice} kr
      </p>
      <p>
        <strong>Beskrivelse:</strong> {product.productDescription}
      </p>
      <p>
        <strong>Kategori:</strong> {product.category?.categoryName || "Ukendt"}
      </p>

      {onBack && (
        <button
          onClick={onBack}
          className="button"
        >
          Tilbage til Produkter
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
