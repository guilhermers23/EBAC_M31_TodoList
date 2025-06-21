import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { changeTerm } from "../../store/reducers/filter";
import CardFilter from "../../components/CardFilter";
import * as S from "./styled";
import * as enums from "../../utilities/enums/TasksEnums";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { term } = useSelector((state: RootReducer) => state.filter);

    const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeTerm(e.target.value))
    return (
        <S.Aside>
            <div>
                <S.Input type="text" placeholder="Buscar" value={term} onChange={onChangeTerm} />
                <S.Filters>
                    <CardFilter criterion="All" label="Todos" />
                    <CardFilter value={enums.Priority.IMPORTANTE} criterion="Priority" label="Importantes" />
                    <CardFilter value={enums.Priority.URGENTE} criterion="Priority" label="Urgentes" />
                    <CardFilter value={enums.Priority.NORMAL} criterion="Priority" label="Normal" />
                    <CardFilter value={enums.Status.PENDENTE} criterion="Status" label="Pendentes" />
                    <CardFilter value={enums.Status.CONCLUIDA} criterion="Status" label="Concluídos" />
                </S.Filters>
            </div>
        </S.Aside>
    )
};

export default Sidebar;
