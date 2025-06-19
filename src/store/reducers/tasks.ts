import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from "../../utilities/enums/TasksEnums";

const initialState = [
  new Task(
    1,
    "Aprender sobre APIs",
    enums.Priority.IMPORTANTE,
    enums.Status.CONCLUIDA,
    "Estudar como consumir APIs RESTful em React, incluindo o uso de fetch e bibliotecas como Axios.  Praticar com uma API pública de sua escolha, exibindo os dados na interface do usuário."
  ),

  new Task(
    2,
    "Otimizar o Desempenho do React",
    enums.Priority.URGENTE,
    enums.Status.PENDENTE,
    "Aprofundar o conhecimento sobre otimização de desempenho em React.  Estudar técnicas como memoization, lazy loading, e virtualização de listas.  Implementar essas técnicas em um projeto existente para melhorar a velocidade de renderização."
  ),

  new Task(
    3,
    "Explorar o Context API",
    enums.Priority.NORMAL,
    enums.Status.PENDENTE,
    "Aprender e praticar o uso do Context API para gerenciar o estado global da aplicação em React.  Criar um contexto para compartilhar dados entre componentes sem a necessidade de passar props manualmente."
  ),

  new Task(
    4,
    "Criar um Projeto Pessoal Completo",
    enums.Priority.NORMAL,
    enums.Status.PENDENTE,
    "Desenvolver um projeto React completo, aplicando todos os conhecimentos adquiridos.  O projeto pode ser um blog, um e-commerce, um gerenciador de tarefas, ou qualquer outra ideia que você tenha.  Priorizar a organização do código, a responsividade e a usabilidade."
  ),
];

const taskSSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { removeTask } = taskSSlice.actions;
export default taskSSlice.reducer;
