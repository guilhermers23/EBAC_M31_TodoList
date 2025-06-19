import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../store/reducers/tasks';
import type TaskClass from '../../models/Task';
import * as S from './styled';

type PropsTask = TaskClass;

const Task = ({ id, title, priority, status, description }: PropsTask) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    return (
        <S.Card>
            <S.Title>{title}</S.Title>
            <S.Tag parameter='Priority' priorityColor={priority}>{priority}</S.Tag>
            <S.Tag parameter='Status' statusColor={status}>{status}</S.Tag>
            <S.Description value={description} readOnly={!edit} />
            <S.ActionsBar>
                {edit ? (
                    <>
                        <S.SaveButton>Salvar</S.SaveButton>
                        <S.RedButton onClick={() => setEdit(false)}>Cancelar</S.RedButton>
                    </>
                ) : (
                    <>
                        <S.Button onClick={() => setEdit(true)}>Editar</S.Button>
                        <S.RedButton onClick={() => dispatch(removeTask(id))} >Remover</S.RedButton>
                    </>
                )}
            </S.ActionsBar>
        </S.Card >
    )
};

export default Task;
