import { Provider } from "react-redux";
import Sidebar from "./containers/Sidebar";
import TaskList from "./containers/TaskList";
import GlobalStyled, { Container } from "./styles";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Container>
        <Sidebar />
        <TaskList />
      </Container>
    </Provider>
  )
};

export default App;
