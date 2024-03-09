import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.forestGreen};
    border: none;
    border-radius: 3px;
    padding: 8px;
    margin: 1%;
    font-size: x-large;

&:hover{
    filter: brightness(110%);
}

&:focus{
    filter: brightness(110%);
    border: none;
}
`;