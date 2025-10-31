import React, { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer/GridContainer";
import Products from "../components/Products/Products";
import salesstrat from "../assets/salesstrat.png"

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
      <div>
        <p>
          sales strat image
        </p>
      </div>

      <div style={{ background: "#585858", margintop: "20px" }}>
        <p style={{ fontSize: "30px" }}>Featured</p>
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
      
      <div>
        <p>Some quick slogan with image</p>
      </div>
    </div>
  );
};

export default HomePage;
