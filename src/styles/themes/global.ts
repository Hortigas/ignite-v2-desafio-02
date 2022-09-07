import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --toastify-color-light: ${props => props.theme.baseCard};
        --toastify-text-color-light: ${props => props.theme.baseText};
        --toastify-font-family: 'Roboto';
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &:disabled {
            cursor: not-allowed;
        }
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.baseText};
        -webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        @media (max-width: 1125px) {
            font-size: 87.5%;
        }
    }

    svg, a {
        cursor: pointer;
        user-select: none;
    }
`;
