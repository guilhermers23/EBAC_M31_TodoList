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
            <S.Tag>{priority}</S.Tag>
            <S.Tag>{status}</S.Tag>
            <S.Description value={description} readOnly={!edit} />
            <S.ActionsBar>
                {edit ? (
                    <>
                        <S.Button>Salvar</S.Button>
                        <S.Button onClick={() => setEdit(false)}>Cancelar</S.Button>
                    </>
                ) : (
                    <>
                        <S.Button onClick={() => setEdit(true)}>Editar</S.Button>
                        <S.Button>Remover</S.Button>
                    </>
                )}
            </S.ActionsBar>
        </S.Card>
    )
};

export default Task;
