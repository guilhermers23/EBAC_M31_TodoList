import type Task from "../models/Task";
import * as enums from "../utilities/enums/TasksEnums";

export type TaskState = { taskList: Task[] };

export const data: TaskState = {
  taskList: [
    {
      id: 1,
      title: "Aprender sobre APIs",
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      description:
        "Estudar como consumir APIs RESTful em React, incluindo o uso de fetch e bibliotecas como Axios.  Praticar com uma API pública de sua escolha, exibindo os dados na interface do usuário.",
    },
    {
      id: 2,
      title: "Otimizar o Desempenho do React",
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      description:
        "Aprofundar o conhecimento sobre otimização de desempenho em React.  Estudar técnicas como memoization, lazy loading, e virtualização de listas.  Implementar essas técnicas em um projeto existente para melhorar a velocidade de renderização.",
    },
    {
      id: 3,
      title: "Explorar o Context API",
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      description:
        "Aprender e praticar o uso do Context API para gerenciar o estado global da aplicação em React.  Criar um contexto para compartilhar dados entre componentes sem a necessidade de passar props manualmente.",
    },
    {
      id: 4,
      title: "Criar um Projeto Pessoal Completo",
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      description:
        "Desenvolver um projeto React completo, aplicando todos os conhecimentos adquiridos.  O projeto pode ser um blog, um e-commerce, um gerenciador de tarefas, ou qualquer outra ideia que você tenha.  Priorizar a organização do código, a responsividade e a usabilidade.",
    },
  ],
};
