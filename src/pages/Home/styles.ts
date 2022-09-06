import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: row;
    padding: 5.75rem 0;
    height:475px;

    &>div {
        height: 100%;
        margin-right: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }

    &>img {
        height:360px;
    }
`;

export const TitleContainer = styled.div`
    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 700;
        line-height:130%;
        color: ${props => props.theme.baseTitle};
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.25rem;
        font-weight: normal;
    }
`;

export const AdvantagesContainer = styled.div`
`;

export const BulletpointContainer = styled.span``;