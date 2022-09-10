import styled from 'styled-components';
import { BaseModelContainer } from './../../styles';

export const AddressContainer = styled(BaseModelContainer)`
    .inputs {
        display: grid;
        grid-template-columns: 200px 1fr 60px;
        grid-template-areas:
            'postalCode empty empty'
            'street street street'
            'addressNumber addressComplement addressComplement'
            'addressRegion city state';
        gap: 1rem;

        @media (max-width: 656px) {
            display: flex;
            flex-direction: column;
        }

        div {
            position: relative;

            span {
                font-size: 0.8rem;
                color: ${(props) => props.theme.red};
                padding: 0.75rem;
                font-weight: bold;
            }

            i {
                position: absolute;
                top: 50%;
                right: 0.75rem;
                transform: translate(0, -50%);
                font-size: 0.75rem;
                color: ${(props) => props.theme.baseLabel};
            }
        }
    }
`;

export const Input = styled.input`
    padding: 0.75rem;
    color: ${(props) => props.theme.baseText};
    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseButton};
    border-radius: 4px;
    font-size: 0.875rem;
    width: 100%;
    overflow: hidden;

    ::placeholder {
        color: ${(props) => props.theme.baseLabel};
    }
`;
