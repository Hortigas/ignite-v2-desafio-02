import styled from "styled-components";

export const CoffeeListItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 6px 36px;
    padding:1.25rem;
    background: ${props => props.theme.baseCard};   

    img {
        margin-top: -40px;
        margin-bottom: 0.875rem;
    }
    
    .tags {
        margin-bottom: 1rem;
        
        span {
            color: ${props => props.theme.yellowDark};
            background: ${props => props.theme.yellowLight};
            font-size: 0.625rem;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 100px;
        }
    }

    h1 {
        font-size: 1.25rem;
        font-family: 'baloo 2';
        color: ${props => props.theme.baseTitle};
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 0.875rem;
        color: ${props => props.theme.baseLabel};
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
            font-size: 1.5rem;
            font-family: 'baloo 2';
            color: ${props => props.theme.baseText};

            &::before {
                content: "R$ ";
                font-family:"Roboto";
                font-weight: 400;
                font-size:0.875rem;
            }
        }

        .counter {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${props => props.theme.baseButton};
            border-radius: 8px;
            margin: 0 0.5rem 0 auto;

            &>svg {
                padding: 0.75rem;
                color: ${props => props.theme.purple};
            }

            &>span {
                font-size:1rem;
                padding: 0.5rem 0;
            }
        }
        
        &>svg {
            color: ${props => props.theme.background};
            background: ${props => props.theme.purpleDark};
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
`;