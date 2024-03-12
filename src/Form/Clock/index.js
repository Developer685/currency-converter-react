import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const Clock = () => {

    const date = useCurrentDate();

    const actualDate = date.toLocaleString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })

    return (
        <StyledClock>
            Aktualna data: {" "}
            {actualDate}
        </StyledClock>
    )
};

export default Clock;