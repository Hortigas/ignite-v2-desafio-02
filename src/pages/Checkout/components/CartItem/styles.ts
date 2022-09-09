import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.baseButton};

    img {
        height: 64px;
        width: 64px;
    }

    & > span {
            font-weight: bold;
            color: ${props => props.theme.baseText};
    }

    .information {
        display: flex;
        flex-direction: column;
        margin: 0 3.125rem 0 1.25rem;

        h3 {
            font-size: 1rem;
            font-weight: normal;
            color: ${props => props.theme.baseSubtitle};
            margin-bottom: 0.5rem;
        }

        .buttons {
            display: flex;

            .counter {
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${props => props.theme.baseButton};
                border-radius: 8px;
                margin: 0 0.5rem 0 auto;

                &>svg {
                    padding: 0.65rem;
                    color: ${props => props.theme.purple};
                    cursor: pointer;

                    transition: color 0.1s;
                    &:hover {
                        color: ${props => props.theme.purpleDark};
                    }
                }

                &>span {
                    font-size:1rem;
                    padding: 0.5rem 0;
                }
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-right: 0.5rem;
                font-size: 0.75rem;
                color: ${props => props.theme.baseText};
                background: ${props => props.theme.baseButton};
                border: none;
                border-radius: 6px;

                &>svg {
                    padding: 0.5rem;
                    color: ${props => props.theme.purple};
                    cursor: pointer;

                    transition: color 0.1s;
                    &:hover {
                        color: ${props => props.theme.purpleDark};
                    }
                }
            }
        }
    }
`;