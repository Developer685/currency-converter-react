import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.white};
    border: solid 2px;
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

export const ButtonDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
padding: 2%;
`;