import Task from "../../components/Task";
import * as S from "./styled";
//import tasks from "../../JSON/task.json";
import * as enums from "../../utilities/enums/TasksEnums";

const tasks = [
    {
        "title": "Aprender sobre APIs",
        "priority": enums.Priority.IMPORTANTE,
        "status": enums.Status.CONCLUIDA,
        "description": "Estudar como consumir APIs RESTful em React, incluindo o uso de fetch e bibliotecas como Axios.  Praticar com uma API pública de sua escolha, exibindo os dados na interface do usuário."
    },
    {
        "title": "Otimizar o Desempenho do React",
        "priority": enums.Priority.URGENTE,
        "status": enums.Status.PENDENTE,
        "description": "Aprofundar o conhecimento sobre otimização de desempenho em React.  Estudar técnicas como memoization, lazy loading, e virtualização de listas.  Implementar essas técnicas em um projeto existente para melhorar a velocidade de renderização."
    },
    {
        "title": "Explorar o Context API",
        "priority": enums.Priority.NORMAL,
        "status": enums.Status.PENDENTE,
        "description": "Aprender e praticar o uso do Context API para gerenciar o estado global da aplicação em React.  Criar um contexto para compartilhar dados entre componentes sem a necessidade de passar props manualmente."
    },
    {
        "title": "Estudar React Router",
        "priority": enums.Priority.IMPORTANTE,
        "status": enums.Status.CONCLUIDA,
        "description": "Aprender a usar o React Router para implementar a navegação entre diferentes rotas e páginas em uma aplicação React. Criar um site de uma página com várias seções usando o React Router."
    },
    {
        "title": "Escrever Testes Unitários com Jest e React Testing Library",
        "priority": enums.Priority.IMPORTANTE,
        "status": enums.Status.CONCLUIDA,
        "description": "Aprender a escrever testes unitários para componentes React usando Jest e React Testing Library. Cobrir diferentes cenários de teste, incluindo renderização, interação do usuário e simulação de eventos."
    },
    {
        "title": "Criar um Projeto Pessoal Completo",
        "priority": enums.Priority.NORMAL,
        "status": enums.Status.PENDENTE,
        "description": "Desenvolver um projeto React completo, aplicando todos os conhecimentos adquiridos.  O projeto pode ser um blog, um e-commerce, um gerenciador de tarefas, ou qualquer outra ideia que você tenha.  Priorizar a organização do código, a responsividade e a usabilidade."
    }
]

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
