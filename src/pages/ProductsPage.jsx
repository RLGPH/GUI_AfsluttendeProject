import { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer/GridContainer";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let hasFetched = false;

    async function fetchProducts() {
      if (hasFetched) return;
      hasFetched = true;

      try {
        const response = await fetch(
          "http://casp142b.web.techcollege.dk/api/Products"
        );
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Fejl i hentning af data: {error}</p>;

  return (
    <div>
      <h1>Produkter</h1>

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

export default ProductsPage;
