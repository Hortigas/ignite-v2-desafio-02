import styled from 'styled-components';
import { BaseModelContainer } from './../../styles';

export const AddressContainer = styled(BaseModelContainer)`
    .inputs {
        display: grid;
        grid-template-columns: 200px 1fr 60px;
        grid-template-areas:
        "postalCode emp emp"
		"street street street"
		"addressNumber addressComplement addressComplement"
        "addressRegion city state"
		;

        gap: 1rem;
    }
`;

export const Input = styled.input`
    padding: 0.75rem;
    background: ${props => props.theme.baseInput};
    border: 1px solid ${props => props.theme.baseButton};
    border-radius: 4px;

    font-size:0.875rem;
`;