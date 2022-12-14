import styled from 'styled-components';

export const CoffeeListItemContainer = styled.div`
    width: 256px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 6px 36px;
    padding: 1.25rem;
    background: ${(props) => props.theme.baseCard};

    img {
        margin-top: -40px;
        margin-bottom: 0.875rem;
    }

    .tags {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        span {
            color: ${(props) => props.theme.yellowDark};
            background: ${(props) => props.theme.yellowLight};
            font-size: 0.625rem;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 100px;
        }
    }

    h1 {
        font-size: 1.25rem;
        font-family: 'baloo 2';
        color: ${(props) => props.theme.baseTitle};
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 0.875rem;
        color: ${(props) => props.theme.baseLabel};
        text-align: center;
        font-weight: normal;
        margin-bottom: 2rem;
    }

    .buyArea {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        & > span {
            font-size: 1.3rem;
            font-family: 'baloo 2';
            color: ${(props) => props.theme.baseText};

            &::before {
                content: 'R$ ';
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 0.875rem;
            }
        }

        .counter {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${(props) => props.theme.baseButton};
            border-radius: 8px;
            margin: 0 0.5rem 0 auto;

            & > svg {
                padding: 0.65rem;
                color: ${(props) => props.theme.purple};
                cursor: pointer;

                transition: color 0.1s;
                &:hover {
                    color: ${(props) => props.theme.purpleDark};
                }

                &:focus {
                    outline: none;
                }

                &:focus-visible {
                    outline: 2px solid ${(props) => props.theme.yellow};
                }
            }

            & > span {
                font-size: 1rem;
                padding: 0.5rem 0;
                min-width: 1.125rem;
                text-align: center;
            }
        }

        & > svg {
            color: ${(props) => props.theme.background};
            background: ${(props) => props.theme.purpleDark};
            padding: 0.5rem;
            border-radius: 8px;
            cursor: pointer;

            transition: background 0.1s;
            &:hover {
                background: ${(props) => props.theme.purple};
            }
            &:focus {
                outline: none;
            }
            &:focus-visible {
                outline: 3px solid ${(props) => props.theme.yellow};
            }
        }
    }
`;
