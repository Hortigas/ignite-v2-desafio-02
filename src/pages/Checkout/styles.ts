import styled from "styled-components";

interface ButtonProps {
    selected: boolean;
}

export const CheckoutContainer = styled.form`
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 4.875rem;

    & > div:first-child {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`;

export const BaseModelContainer = styled.div`
    background: ${props => props.theme.baseCard};
    padding: 2.5rem;
    border-radius: 6px;

    position: relative;

    & > b {
        color: ${(props) => props.theme.baseSubtitle};
        position: absolute;
        top: -2.5rem;
        left: 0;
        font-size: 1.125rem;
        font-family: 'baloo 2';
    }

    div.info {
        display: flex;

        svg {
            height: 22px;
            width: 22px;
            margin-right: 0.5rem;
        }

        h2 {
            font-size:1rem;
            font-weight: normal;
            color: ${(props) => props.theme.baseSubtitle};
            margin-bottom: 0.125rem;
        }
    
        span {
            display: inline-block;
            font-size: 0.875rem;
            margin-bottom: 2rem;
        }
    } 

    & > .inputs {

    }
`;

export const PaymentContainer = styled(BaseModelContainer)`
    div.paymentMethods {
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
    }
`;

export const Button = styled.button<ButtonProps>`
    padding: 1rem;
    background: ${(props) => props.selected ? props.theme.purpleLight : props.theme.baseButton};
    border: ${(props) => props.selected ? `1px solid ${props.theme.purple}` : 'none'};
    border-radius: 6px;
    color: ${(props) => props.theme.baseText};
    font-size: 0.75rem;
    cursor: pointer;

    display:flex;
    align-items: center;

    transition: background 0.1s;
    &:hover {
        background: ${props => props.selected ? props.theme.purpleLight : props.theme.baseHover};
    }

    svg {
        color: ${(props) => props.theme.purple};
        height: 16px;
        width: 16px;
        margin-right: 0.75rem;
    }
`;

export const CartItensContainer = styled(BaseModelContainer)`
    width: 448px;
    border-radius: 6px 44px;

    height: 500px;
`;