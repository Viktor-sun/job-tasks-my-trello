import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { usersSelectors } from "../../redux/selectors";
import { navRoutes } from "../../routes";
import { ILocation } from "../../interfaces";

interface IProps {
  restricted?: boolean;
  component: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ component, restricted, path }: IProps) => {
  const isAuth = useSelector(usersSelectors.getIsAuthenticated);
  const location = useLocation();
  const from = (location.state as ILocation)?.from || navRoutes.home;

  if (path === navRoutes.notFound) {
    return component;
  }

  if (restricted) {
    return isAuth ? (
      component
    ) : (
      <Navigate
        to={navRoutes.login}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return !isAuth ? component : <Navigate to={from} replace />;
};

export default ProtectedRoute;
