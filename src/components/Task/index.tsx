import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, editTask } from '../../store/reducers/tasks';
import type TaskClass from '../../models/Task';
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
    // }, [originalDescription])

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

    return (
        <S.Card>
            <S.TitleTask>{title}</S.TitleTask>
            <S.Tag parameter='Priority' priorityColor={priority}>{priority}</S.Tag>
            <S.Tag parameter='Status' statusColor={status}>{status}</S.Tag>
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
                        <GS.RedButton onClick={() => dispatch(removeTask(id))} >Remover</GS.RedButton>
                    </>
                )}
            </S.ActionsBar>
        </S.Card >
    )
};

export default Task;
