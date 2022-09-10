import styled from 'styled-components';
import { BaseModelContainer } from '../../styles';

export const CartItensContainer = styled(BaseModelContainer)`
    border-radius: 6px 44px;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .subPrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        margin-bottom: 0.85rem;

        span {
            font-size: 0.875rem;
        }
    }

    .totalPrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        margin-bottom: 1.5rem;

        span {
            color: ${(props) => props.theme.baseSubtitle};
            font-size: 1.25rem;
            font-weight: bold;
        }
    }

    & > button {
        padding: 0.75rem 0.5rem;
        width: 100%;
        max-width: 23rem;
        border-radius: 6px;
        border: none;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.yellow};
        cursor: pointer;

        transition: background 0.1s;

        &:hover {
            background: ${(props) => props.theme.yellowDark};
        }

        @media (min-width: 1125px) {
            min-width: 23rem;
        }
    }
`;
