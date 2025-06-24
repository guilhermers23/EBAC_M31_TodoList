import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new_task",
    element: <h1>Nova Tarefa</h1>
  }
]);

export default AppRoutes;
