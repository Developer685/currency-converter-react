import styled from "styled-components";

export const StyledSelect = styled.select`
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.color.black} 2px solid;
    border-radius: 3px;
    padding: 8px;
    font-size: large;
    align-self: baseline;
    
`;
