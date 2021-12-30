import Home from "./pages/Home";
import Board from "./pages/Board";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";

export const navRoutes = {
  home: "/",
  board: "/board",
  card: "/board/:cardId",
  notFound: "*",
};

export const routes = [
  {
    path: navRoutes.home,
    component: <Home />,
  },
  {
    path: navRoutes.board,
    component: <Board />,
  },
  {
    path: navRoutes.card,
    component: <Card />,
  },
  {
    path: navRoutes.notFound,
    component: <NotFound />,
  },
];
