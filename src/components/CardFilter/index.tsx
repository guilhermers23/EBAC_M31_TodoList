import * as S from "./styled";

export type PropsCard = { active?: boolean };

const CardFilter = ({ active }: PropsCard) => (
    <S.Card active={active}>
        <S.Counter>7</S.Counter>
        <S.Label>Pendentes</S.Label>
    </S.Card>

);

export default CardFilter;
