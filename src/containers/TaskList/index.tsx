import Task from "../../components/Task";
import * as S from "./styled";
import tasks from "../../JSON/task.json";

const TaskList = () => (
    <S.Main>
        <p>2 tarefas marcadas como "todas" e "termo".</p>
        <ul>
            {tasks.map(({ title, priority, status, description }) => (
                <li key={title}>
                    <Task title={title} priority={priority} status={status} description={description} />
                </li>
            ))}
        </ul>
    </S.Main>
);

export default TaskList;
