import React, { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer/GridContainer";
import Products from "../components/Products/Products";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSelected() {
      try {

        const ids = [1, 2, 3];
        const promises = ids.map((id) =>
          fetch(`http://casp142b.web.techcollege.dk/api/Products/${id}`).then(
            (res) => res.json()
          )
        );

        const results = await Promise.all(promises);
        setProducts(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSelected(); 
  }, []);

  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Fejl i hentning af data: {error}</p>;

  return (
    <div>
      <h1>Home</h1>
      <GridContainer>
        {products.map((item) => (
          <Products
            key={item.productId}
            id={item.productId}
            title={item.productName}
            price={item.productPrice}
            description={item.productDescription}
            image={item.image}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default HomePage;
