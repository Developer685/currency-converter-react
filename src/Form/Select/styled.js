import styled from "styled-components";

export const StyledSelect = styled.select`
    background-color: ${({ theme }) => theme.color.forestGreen};
    border: ${({ theme }) => theme.color.black} 2px solid;
    border-radius: 3px;
    padding: 8px;
    font-size: large;
    margin: 0% 1%;
`;
