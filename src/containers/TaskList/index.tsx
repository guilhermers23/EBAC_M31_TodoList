import Task from "../../components/Task";
import * as S from "./styled";

const TaskList = () => (
    <S.Main>
        <p>2 tarefas marcadas como "todas" e "termo".</p>
        <ul>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </ul>
    </S.Main>
);

export default TaskList;
