import { StyledSelect} from "./styled";

const Select = ({ setCurrency }) => (

    <StyledSelect onChange={({ target }) => setCurrency(target.value)}>
        <option  code="EUR">EUR</option>
        <option  code="PLN">PLN</option>
        <option  code="USD">USD</option>
        <option  code="GBP">GBP</option>
        <option  code="CHF">CHF</option>
    </StyledSelect>

);

export default Select;