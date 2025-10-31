import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GridContainer from "../components/GridContainer/GridContainer";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchProducts() {

      try {
        if(categoryId != null){
          const url = `http://casp142b.web.techcollege.dk/api/Products/Category/${categoryId}`
          const response = await fetch(url);
          const result = await response.json();
          setProducts(result);
        }
        else{
          const url = `http://casp142b.web.techcollege.dk/api/Products`
          const response = await fetch(url);
          const result = await response.json();
          setProducts(result);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId]);

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
