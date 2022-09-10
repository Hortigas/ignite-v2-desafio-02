import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: calc(70rem + 6rem);
    padding: 0 3rem;
    margin: 0 auto;

    @media (max-width: 656px) {
        padding: 0 1.5rem;
    }
`;
