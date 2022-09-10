import styled from 'styled-components';

export const CheckoutContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 4.875rem;

    @media (max-width: 1125px) {
        flex-direction: column;
        align-items: center;
        gap: 3rem;

        & > div {
            width: 100%;
        }
    }

    & > div:first-child {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`;

export const BaseModelContainer = styled.div`
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    border-radius: 6px;

    position: relative;

    @media (max-width: 656px) {
        padding: 1.5rem;
    }

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
            font-size: 1rem;
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
`;

export const EmptyCartContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 6.75rem);

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        margin-top: -6.75rem;

        @media (max-width: 656px) {
            font-size: 1.5rem;
        }

        svg {
            margin-right: 1rem;
            height: 64px;
            width: 64px;

            @media (max-width: 656px) {
                height: 48px;
                width: 48px;
            }
        }
    }
`;
