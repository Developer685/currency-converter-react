import styled from "styled-components";

export const StyledForm = styled.form`
    text-align: center;
    padding: 5%;
`;

export const Header = styled.h1`

    padding-left: 5%;
    text-align: left;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.lochmara};
    background: linear-gradient(90deg, rgba(2,120,189,1) 0%, rgba(2,198,239,1) 100%);
    font-size: x-large;
    width: all;

`;

export const HeaderDiv = styled.div`
    font-size: small;
    padding: 3px;
`;

export const Section = styled.section`
    background: ${({ theme }) => theme.color.lochmara};
    background: linear-gradient(90deg, rgba(2,120,189,1) 0%, rgba(2,198,239,1) 100%);
    font-size: xx-large;
    color: white;
    margin: 1%;
    border-radius: 15px;
    min-height: 250px;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 10%;
    row-gap: 5px;
    
`;
