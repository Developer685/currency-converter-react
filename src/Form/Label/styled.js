import styled from "styled-components";

export const Input = styled.input`
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.color.black} 2px solid;
    border-radius: 3px;
    padding: 4px 10px;
    padding: center;
    width: 100%;
    max-width: 15%;
    font-size: x-large;
    margin: 1%;
`;