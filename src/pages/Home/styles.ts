import styled from "styled-components";
import { ThemeType } from "../../@types/styled";

interface BulletpointContainerProps {
    backgroundColor: string;
}

export const HomeContainer = styled.main`
    & > h2 {
        font-size: 2rem;
        font-weight: 800;
        font-family: 'baloo 2';
        color: ${props => props.theme.baseSubtitle};
    }
`;

export const LandingPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 5.75rem 0;
    gap: 3.5rem;

    & > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }

    & > img {
        max-height:360px;
        max-width:476px;
        width: 100%;
    }

    @media (max-width: 1125px) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const TitleContainer = styled.div`
    margin-bottom: 4rem;

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 700;
        line-height:130%;
        color: ${props => props.theme.baseTitle};
        margin-bottom: 1rem;

        @media (max-width: 1125px) {
            font-size: 3rem;
            line-height:100%;
        }
    }

    h2 {
        font-size: 1.25rem;
        font-weight: normal;
    }
`;

export const AdvantagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 0;

    @media (max-width: 592px) {
        grid-template-columns: 1fr;
        }
`;

export const BulletpointContainer = styled.span<BulletpointContainerProps>`
    display: flex;
    align-items: center;
    font-size:1rem;
    
    & > svg {
        margin-right: 0.75rem;
        padding: 8px;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.backgroundColor};
        border-radius: 50%;
        min-width:2rem;
        min-height:2rem;
    }

`;