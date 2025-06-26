import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { changeTerm } from "../../store/reducers/filter";
import CardFilter from "../../components/CardFilter";
import * as enums from "../../utilities/enums/TasksEnums";
import * as S from "./styled";
import * as GS from "../../styles";
import { useNavigate } from "react-router-dom";

type Props = { showFilters: boolean };

const Sidebar = ({ showFilters }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { term } = useSelector((state: RootReducer) => state.filter);

    const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeTerm(e.target.value))
    return (
        <S.Aside>
            {showFilters ? (
                <div>
                    <GS.Input type="text" placeholder="Buscar" value={term} onChange={onChangeTerm} />
                    <S.Filters>
                        <CardFilter criterion="All" label="Todos" />
                        <CardFilter value={enums.Priority.IMPORTANTE} criterion="Priority" label="Importantes" />
                        <CardFilter value={enums.Priority.URGENTE} criterion="Priority" label="Urgentes" />
                        <CardFilter value={enums.Priority.NORMAL} criterion="Priority" label="Normal" />
                        <CardFilter value={enums.Status.PENDENTE} criterion="Status" label="Pendentes" />
                        <CardFilter value={enums.Status.CONCLUIDA} criterion="Status" label="Concluídos" />
                    </S.Filters>
                </div>
            ) : (
                <GS.Button onClick={() => navigate("/")}>Voltar a lista de tarefas</GS.Button>
            )}
        </S.Aside>
    )
};

export default Sidebar;
