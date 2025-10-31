import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="Link" to="/">Home</Link>
        </li>
        <li>
          <Link className="Link" to="/ProductsPage">Products</Link>
        </li>
        <li>
          <Link className="Link" to="/ProductsPage/category/2">Tables</Link>
        </li>
        <li>
          <Link className="Link" to="/ProductsPage/category/3">GPU</Link>
        </li>
        <li>
          <Link className="Link" to="/ProductsPage/category/1">Chairs</Link>
        </li>
      </ul>
    </nav>
  );
};
