import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./assets/styles";
import { routes } from "./routes";

function App() {
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
