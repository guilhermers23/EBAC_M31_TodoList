import { useDispatch, useSelector } from "react-redux";
import CardFilter from "../../components/CardFilter";
import type { RootReducer } from "../../store";
import * as S from "./styled";
import { changeTerm } from "../../store/reducers/filter";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { term } = useSelector((state: RootReducer) => state.filter);

    const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeTerm(e.target.value))
    return (
        <S.Aside>
            <div>
                <S.Input type="text" placeholder="Buscar" value={term} onChange={onChangeTerm} />
                <S.Filters>
                    <CardFilter counter={15} label="Todos" active />
                    <CardFilter counter={5} label="Pendentes" />
                    <CardFilter counter={1} label="Importantes" />
                    <CardFilter counter={3} label="Urgentes" />
                    <CardFilter counter={4} label="Normal" />
                    <CardFilter counter={2} label="Concluídos" />
                </S.Filters>
            </div>
        </S.Aside>
    )
};

export default Sidebar;
