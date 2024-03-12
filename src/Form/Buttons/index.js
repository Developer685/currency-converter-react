import { StyledButton, ButtonDiv } from "./styled";

const Buttons = ({ amount, calculateResult, setAmount }) => (
    <ButtonDiv>
        <StyledButton onClick={() => calculateResult(amount)}>
            Przelicz
        </StyledButton>

        <StyledButton onClick={() => setAmount("")}>
            Wyczyść
        </StyledButton>
    </ButtonDiv>

);

export default Buttons;