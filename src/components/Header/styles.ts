import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 0.75rem;

    nav {
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 0.75rem;
    }
`;

export const ButtonBaseContainer = styled.a`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 6px;
    text-decoration: none;
`;

export const ButtonLocationContainer = styled(ButtonBaseContainer)`
    background: ${props => props.theme.purpleLight};
    color: ${props => props.theme.purpleDark};

    & > svg {
        margin-right: 0.25rem;
    };
`;

export const ButtonCardContainer = styled(ButtonBaseContainer)`
    background: ${props => props.theme.yellowLight};
`;
