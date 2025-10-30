import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HoldUp from "../assets/holdup.jpg";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`http://casp142b.web.techcollege.dk/api/Products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p>Indlæser produkt...</p>;
  if (error) return <p>Fejl: {error}</p>;
  if (!product) return <p>Produkt ikke fundet.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.productName}</h1>
      <img
        src={product.image?.imageUrl || HoldUp}
        alt={product.productName}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "1rem" }}
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
      <button
        onClick={() => navigate("/ProductsPage")}
        style={{
          padding: "8px 16px",
          marginTop: "1rem",
          borderRadius: "5px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Tilbage til Produkter
      </button>
    </div>
  );
};

export default SingleProductPage;
