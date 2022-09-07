import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    gap: 2rem;
    margin: 3.375rem 0;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 1232px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 944px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 656px) {
        grid-template-columns: 1fr;
    }
`;