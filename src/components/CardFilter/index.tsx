import * as S from "./styled";

export type PropsCard = {
    active?: boolean;
    label: string;
    counter: number;
};

const CardFilter = ({ active, label, counter }: PropsCard) => (
    <S.Card active={active}>
        <S.Counter>{counter}</S.Counter>
        <S.Label>{label}</S.Label>
    </S.Card>

);

export default CardFilter;
