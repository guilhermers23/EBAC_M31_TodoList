import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as enums from "../../utilities/enums/TasksEnums";
import { addTask } from "../../store/reducers/tasks";
import * as GS from "../../styles";
import * as S from "./styled";

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(enums.Priority.NORMAL);

    const registerTask = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addTask({
            title,
            priority,
            status: enums.Status.PENDENTE,
            description
        }));
        alert("Tarefa adicionada com sucesso!");
        navigate("/");
    };

    return (
        <GS.Main>
            <GS.Title>Adicionar nova Tarefa</GS.Title>
            <S.Form onSubmit={registerTask}>
                <GS.Input type="text" placeholder="Título"
                    value={title} onChange={e => setTitle(e.target.value)}
                    required />
                <GS.Input as="textarea" placeholder="Descrição da Tarefa"
                    value={description} onChange={e => setDescription(e.target.value)} required />
                <S.Options>
                    <p>Prioridade</p>
                    {Object.values(enums.Priority).map(priority => (
                        <S.Option key={priority}>
                            <input
                                type="radio" name="priority"
                                id={priority}
                                value={priority}
                                onChange={e => setPriority(e.target.value as enums.Priority)}
                                defaultChecked={priority === enums.Priority.NORMAL} />

                            <label htmlFor={priority}>{priority}</label>
                        </S.Option>
                    ))}
                </S.Options>
                <GS.SaveButton type="submit">Adicionar Tarefa</GS.SaveButton>
            </S.Form>
        </GS.Main>
    )
};

export default Form;
