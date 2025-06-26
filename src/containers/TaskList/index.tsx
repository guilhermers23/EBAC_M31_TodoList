import { useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { insertTasksExample } from "../../db/localStore";
import Task from "../../components/Task";
import * as GS from "../../styles";

const TaskList = () => {
    const taskList = useSelector((state: RootReducer) => state.tasks);
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

    const tasks = filterTasks();
    const showMessage = (numberOfTasks: number) => {
        let message = "";
        const complement = term !== undefined && term.length > 0 ? `e "${term}"` : "";

        if (criterion === "All") {
            message = `${numberOfTasks} tarefa(s) encontrada(s) marcada(s) como: "Todas" ${complement}.`
        }
        else {
            message = `${numberOfTasks} tarefa(s) encontrada(s) marcada(s) como: "${value}" ${complement}.`
        }
        return message;
    };
    //Carregar Tarefas para exemplo
    const LoadTasksExample = () => {
        insertTasksExample();
        window.location.reload();
    };

    return (
        <GS.Main>
            <GS.Title as="p">{showMessage(tasks.length)}</GS.Title>
            {taskList.length === 0 && <GS.Button onClick={() => LoadTasksExample()}>Carregar Tarefas exemplo</GS.Button>}
            <ul>
                {tasks.map(({ id, title, priority, status, description }) => (
                    <li key={id}>
                        <Task id={id} title={title} priority={priority} status={status} description={description} />
                    </li>
                ))}
            </ul>
        </GS.Main>
    )
};

export default TaskList;
