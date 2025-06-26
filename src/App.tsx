import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store";
import AppRoutes from "./Routes";
import GlobalStyled, { Container } from "./styles";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Container>
        <RouterProvider router={AppRoutes} />
      </Container>
    </Provider>
  )
};

export default App;
