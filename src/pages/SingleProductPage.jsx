import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://casp142b.web.techcollege.dk/api/Products/${id}`
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (isLoading) return <p>Indlæser produkt...</p>;
  if (error) return <p>Fejl: {error}</p>;
  if (!product) return <p>Produkt ikke fundet.</p>;

  return (
    <SingleProduct product={product} onBack={() => navigate("/ProductsPage")} />
  );
};

export default SingleProductPage;
