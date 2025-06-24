import AddButton from "../../components/AddButton";
import Sidebar from "../../containers/Sidebar"
import TaskList from "../../containers/TaskList"

const Home = () => (
    <>
        <Sidebar />
        <TaskList />
        <AddButton />
    </>
);

export default Home;
