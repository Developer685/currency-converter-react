import { StyledSelect } from "./styled";

const Select = ({ currency, ratesData }) => (

    <StyledSelect onChange={({ target }) => currency(target.value)}>
        {Object.keys(ratesData.value).map(((currency) => (
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