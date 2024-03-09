import styled from "styled-components";

export const StyledFildset = styled.fieldset`
    border: ${({ theme }) => theme.color.silverChalice} 10px solid;
    background-color: ${({ theme }) => theme.color.abbey} ;
    border-radius: 38px;
`;