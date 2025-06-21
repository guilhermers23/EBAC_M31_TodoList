import { useSelector } from "react-redux";
import Task from "../../components/Task";
import * as S from "./styled";
import type { RootReducer } from "../../store";
//import tasks from "../../JSON/task.json";

const TaskList = () => {
    const { taskList } = useSelector((state: RootReducer) => state.tasks);
    const { term, criterion, value } = useSelector((state: RootReducer) => state.filter);

    const filterTasks = () => {
        let filteredTasks = taskList;
        if (term !== undefined) {
            filteredTasks = filteredTasks.filter(({ title }) => title.toLowerCase().search(term.toLowerCase()) >= 0);
            if (criterion === "Priority") {
                filteredTasks = filteredTasks.filter(({ priority }) => priority === value);
            } else if (criterion === "Status") {
                filteredTasks = filteredTasks.filter(({ status }) => status === value);
            };
            return filteredTasks;
        } else {
            return taskList
        }
    };

    return (
        <S.Main>
            <p>2 tarefas marcadas como "todas" e "{term}".</p>
            <ul>
                <li>{criterion}</li>
                <li>{value}</li>
            </ul>
            <ul>
                {filterTasks().map(({ id, title, priority, status, description }) => (
                    <li key={id}>
                        <Task id={id} title={title} priority={priority} status={status} description={description} />
                    </li>
                ))}
            </ul>
        </S.Main>
    )
};

export default TaskList;
