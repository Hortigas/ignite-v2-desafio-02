import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 0.75rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        a {
            border-radius: 6px;
        }
    }
`;

export const ButtonBaseContainer = styled.button`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    cursor: pointer;
`;

export const ButtonLocationContainer = styled(ButtonBaseContainer)`
    background: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purpleDark};

    transition: background 0.1s;
    &:hover {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.purple};
    }

    & > svg {
        margin-right: 0.25rem;
    }
`;

export const ButtonCardContainer = styled(ButtonBaseContainer)`
    background: ${(props) => props.theme.yellowLight};
    position: relative;

    transition: background 0.1s;
    &:hover {
        background: ${(props) => props.theme.yellowDark};
    }

    span {
        position: absolute;
        top: -0.625rem;
        height: 1.25rem;
        right: -0.625rem;
        width: 1.25rem;

        font-size: 0.75rem;
        background: ${(props) => props.theme.yellowDark};
        color: ${(props) => props.theme.white};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
