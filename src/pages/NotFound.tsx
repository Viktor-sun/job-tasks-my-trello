import { Link } from "react-router-dom";
import { navRoutes } from "../routes";

const NotFound = () => {
  return (
    <div>
      <h1>page not found</h1>
      <p>you can go to {<Link to={navRoutes.home}>home</Link>}</p>
    </div>
  );
};

export default NotFound;
