import { StyledButton } from "./styled";

const Buttons = ({ amount, calculateResult, setAmount }) => (
    <div>
        <StyledButton onClick={() => calculateResult(amount)}>
            Przelicz
        </StyledButton>
        
        <StyledButton onClick={() => setAmount("")}>
            Wyczyść
        </StyledButton>
    </div>

);

export default Buttons;