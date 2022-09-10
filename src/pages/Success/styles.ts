import styled from 'styled-components';

interface BulletpointContainerProps {
    backgroundColor: string;
}

export const SuccessContainer = styled.main`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 5rem;

    @media (max-width: 1232px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0;

        & > img {
            margin-top: 1rem;
        }
    }

    & > div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-family: 'baloo 2';
            font-size: 2rem;
            color: ${(props) => props.theme.yellowDark};
            margin-bottom: 0.25rem;
        }

        h2 {
            font-size: 1.25rem;
            font-weight: normal;
            color: ${(props) => props.theme.baseSubtitle};
            margin-bottom: 2.5rem;
        }
    }

    & > img {
        margin-bottom: -13px;
        width: 100%;
        max-width: 492px;
    }
`;

export const InformationContainer = styled.div`
    border-radius: 6px 36px;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    padding: 1px;
    width: 100%;

    .borderwrap {
        border-radius: 6px 36px;
        padding: 2.5rem;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
`;

export const BulletpointContainer = styled.div<BulletpointContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
        margin-right: 0.75rem;
        padding: 8px;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.backgroundColor};
        border-radius: 50%;
        min-width: 2rem;
        min-height: 2rem;
    }

    & > div {
        display: flex;
        flex-direction: column;

        span {
            color: ${(props) => props.theme.baseText};
        }
    }
`;
