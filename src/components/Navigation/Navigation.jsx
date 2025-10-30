import { Link } from "react-router-dom";
import "./Navigation.css"

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
          <Link className="Link">Tables</Link>
        </li>
        <li>
          <Link className="Link">GPU</Link>
        </li>
        <li>
          <Link className="Link">Chairs</Link>
        </li>
      </ul>
    </nav>
  );
};
