import { StyledSelect } from "./styled";

const Select = ({ currency, ratesData }) => (

    <StyledSelect >
        {Object.keys(ratesData.data).map(((currency) => (
            <option
                key={ratesData.data.code}
                value={ratesData.data.value}
            >
                {currency}
            </option>
        )))}
    </StyledSelect>

);

export default Select;