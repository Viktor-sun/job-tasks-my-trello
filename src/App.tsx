import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import routes from "./routes";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.board} element={<Board />} />
    </Routes>
  );
}

export default App;
