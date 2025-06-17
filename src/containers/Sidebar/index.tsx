import CardFilter from "../../components/CardFilter";
import * as S from "./styled";

const Sidebar = () => (
    <S.Aside>
        <div>
            <S.Input type="text" placeholder="Buscar" />
            <S.Filters>
                <CardFilter />
                <CardFilter active />
                <CardFilter />
                <CardFilter />
                <CardFilter />
                <CardFilter />
            </S.Filters>
        </div>
    </S.Aside>
);

export default Sidebar;
