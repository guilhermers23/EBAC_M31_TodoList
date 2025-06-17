import CardFilter from "../../components/CardFilter";
import * as S from "./styled";

const Sidebar = () => (
    <S.Aside>
        <div>
            <S.Input type="text" placeholder="Buscar" />
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
);

export default Sidebar;
