import styled from "styled-components";

export const StyledFildset = styled.fieldset`
   
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 15px;
    border: solid white 2px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 250px;
`;