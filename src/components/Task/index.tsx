import { useState, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, editTask, changeStatusTask } from '../../store/reducers/tasks';
import type TaskClass from '../../models/Task';
import * as enums from "../../utilities/enums/TasksEnums";
import * as S from './styled';
import * as GS from "../../styles";

type PropsTask = TaskClass;

const Task = ({ id, title, priority, status, description: originalDescription }: PropsTask) => {
    const dispatch = useDispatch();
    const [newDescription, setNewDescription] = useState(originalDescription);
    const [edit, setEdit] = useState(false);

    // useEffect(() => {
    //     if (originalDescription.length > 0) {
    //         setNewDescription(originalDescription);
    //     }
    // }, [originalDescription]);

    const cancelEdit = () => {
        setEdit(false);
        setNewDescription(originalDescription);
    };

    const saveEdit = () => {
        dispatch(editTask({
            id,
            description: newDescription,
            title,
            priority,
            status
        }));
        setEdit(false);
    };

    const deleteTask = (id: number) => {
        const result = confirm(" Deseja realmente excluir essa tarefa?");
        if (result === true) {
            dispatch(removeTask(id));
        }
        return;
    };

    const OnChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStatusTask({ id, completed: e.target.checked }))
    };

    return (
        <S.Card>
            <label htmlFor={title}>
                <input type="checkbox" id={title} checked={status === enums.Status.CONCLUIDA}
                    onChange={OnChangeStatus} />
                <S.TitleTask>
                    {edit && <em>Editando: </em>}
                    {title}
                </S.TitleTask>
            </label>
            <S.Tag parameter='Priority' prioritycolor={priority}>{priority}</S.Tag>
            <S.Tag parameter='Status' statuscolor={status}>{status}</S.Tag>
            <S.Description value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                readOnly={!edit} />
            <S.ActionsBar>
                {edit ? (
                    <>
                        <GS.SaveButton onClick={saveEdit}>Salvar</GS.SaveButton>
                        <GS.RedButton onClick={cancelEdit}>Cancelar</GS.RedButton>
                    </>
                ) : (
                    <>
                        <GS.Button onClick={() => setEdit(true)}>Editar</GS.Button>
                        <GS.RedButton onClick={() => deleteTask(id)} >Remover</GS.RedButton>
                    </>
                )}
            </S.ActionsBar>
        </S.Card >
    )
};

export default Task;
