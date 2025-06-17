import * as S from './styled';

const Task = () => (
    <li>
        <S.Card>
            <S.Title>Tarefas X</S.Title>
            <S.Tag>Importante</S.Tag>
            <S.Tag>Pendente</S.Tag>
            <S.Description />
            <S.ActionsBar>
                <S.Button>Editar</S.Button>
                <S.Button>Remover</S.Button>
            </S.ActionsBar>
        </S.Card>
    </li>
);

export default Task;
