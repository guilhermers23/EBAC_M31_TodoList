import Sidebar from "./containers/Sidebar";
import TaskList from "./containers/TaskList";
import GlobalStyled, { Container } from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Sidebar />
        <TaskList />
      </Container>
    </>
  )
};

export default App;
