import styled from 'styled-components';
import { BaseModelContainer } from '../../styles';

interface ButtonProps {
    selected: boolean;
}

export const PaymentContainer = styled(BaseModelContainer)`
    div.paymentMethods {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        @media (max-width: 656px) {
            flex-direction: column;
            button {
                width: 100%;
                justify-content: center;
            }
        }
    }
`;

export const Button = styled.button<ButtonProps>`
    padding: 1rem;
    background: ${(props) => (props.selected ? props.theme.purpleLight : props.theme.baseButton)};
    border: ${(props) => (props.selected ? `1px solid ${props.theme.purple}` : 'none')};
    border-radius: 6px;
    color: ${(props) => props.theme.baseText};
    font-size: 0.75rem;
    cursor: pointer;

    display: flex;
    align-items: center;

    transition: background 0.1s;
    &:hover {
        background: ${(props) => (props.selected ? props.theme.purpleLight : props.theme.baseHover)};
    }

    svg {
        color: ${(props) => props.theme.purple};
        height: 16px;
        width: 16px;
        margin-right: 0.75rem;
    }
`;
