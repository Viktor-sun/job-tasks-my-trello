import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ProtectedRoute from "./components/ProtectedRoute";
import { GlobalStyles, theme } from "./assets/styles";
import { routes } from "./routes";
import { usersActions } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.currentUser.Request());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute
                restricted={route.restricted}
                component={route.component}
                path={route.path}
              />
            }
          />
        ))}
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
