import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
