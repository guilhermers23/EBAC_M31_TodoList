import { useState } from 'react';
import * as S from './styled';

type PropsTask = {
    title: string;
    priority: string;
    status: string;
    description: string;
};

const Task = ({ title, priority, status, description }: PropsTask) => {
    const [edit, setEdit] = useState(false);

    return (
        <S.Card>
            <S.Title>{title}</S.Title>
            <S.Tag priorityColor={priority}>{priority}</S.Tag>
            <S.Tag statusColor={status}>{status}</S.Tag>
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
                        <S.RedButton>Remover</S.RedButton>
                    </>
                )}
            </S.ActionsBar>
        </S.Card >
    )
};

export default Task;
