import styled from "styled-components";

export const Input = styled.input`
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.color.black} 2px solid;
    border-radius: 3px;
    padding: 4px 10px;
    padding: center;
    width: 100%;
    max-width: 90%;
    font-size: xx-large;
    margin: 1%;
`;

export const LabelDiv = styled.div`
    font-size: xx-large;
    text-align: center;
    margin-bottom: 0%;
    padding-bottom: 20px;
    align-self: center;
`;

