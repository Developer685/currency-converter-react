import { StyledSelect } from "./styled";

const Select = ({ ratesData, setCurrency }) => (

    <StyledSelect onChange={({ target }) => setCurrency(target.value)}>
        {Object.keys(ratesData.data).map(((currency) => (
            <option
                key={currency}
                value={currency}
            >
                {currency}
            </option>
        )))}
    </StyledSelect>

);

export default Select;