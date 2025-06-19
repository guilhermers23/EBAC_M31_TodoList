import { useSelector } from "react-redux";
import Task from "../../components/Task";
import * as S from "./styled";
import type { RootReducer } from "../../store";
//import tasks from "../../JSON/task.json";

const TaskList = () => {
    const { taskList } = useSelector((state: RootReducer) => state.tasks);

    return (
        <S.Main>
            <p>2 tarefas marcadas como "todas" e "termo".</p>
            <ul>
                {taskList.map(({ id, title, priority, status, description }) => (
                    <li key={id}>
                        <Task id={id} title={title} priority={priority} status={status} description={description} />
                    </li>
                ))}
            </ul>
        </S.Main>
    )
};

export default TaskList;
