import styled from "styled-components";

export const StyledForm = styled.form`
    text-align: center;
    padding: 5%;
    margin-top: -2%;
`;

export const Section = styled.section`
    background: ${({ theme }) => theme.color.lochmara};
    background: linear-gradient(135deg, rgba(2,120,189,1) 0%, rgba(2,198,239,1) 100%);
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

export const Header = styled.div`

    padding-left: 5%;
    text-align: left;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.lochmara};
    background: linear-gradient(90deg, rgba(2,120,189,1) 0%, rgba(2,198,239,1) 100%);
    font-size: x-large;
    margin-bottom: -3% ;
`;

export const HeaderDiv = styled.div`
    font-size: small;
    padding: 3px;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.white};
`
export const Feilure = styled.p`
    margin: 10%;
    color: ${({ theme }) => theme.color.crimson};
` 
