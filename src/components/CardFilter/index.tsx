import * as S from "./styled";
import * as enums from "../../utilities/enums/TasksEnums";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/reducers/filter";
import type { RootReducer } from "../../store";

export type PropsCard = {
    label: string;
    criterion: "Priority" | "Status" | "All";
    value?: enums.Priority | enums.Status;
};

const CardFilter = ({ label, criterion, value }: PropsCard) => {
    const dispatch = useDispatch();
    const { filter, tasks } = useSelector((state: RootReducer) => state);

    const onFilter = () => { dispatch(changeFilter({ criterion, value })) };

    const isActive = () => {
        const isCriterion = filter.criterion === criterion;
        const isValue = filter.value === value;
        return isCriterion && isValue;
    };

    const counterTasks = () => {
        if (criterion === "All") return tasks.length;
        if (criterion === "Priority") {
            return tasks.filter(({ priority }) => priority === value).length;
        }
        if (criterion === "Status") {
            return tasks.filter(({ status }) => status === value).length;
        }
    };

    const hasActive = isActive();
    const counter = counterTasks();

    return (
        <S.Card active={hasActive} onClick={onFilter}>
            <S.Counter>{counter}</S.Counter>
            <S.Label>{label}</S.Label>
        </S.Card>
    )
};

export default CardFilter;
