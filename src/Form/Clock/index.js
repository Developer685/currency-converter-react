import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const Clock = () => {

    const actualDate = useCurrentDate();

    return (
        <StyledClock>
            Aktualna data: {" "}
            {actualDate}
        </StyledClock>
    )
};

export default Clock;