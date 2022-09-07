import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useProductsCart } from "../../contexts/ProductsContext";
import { defaultTheme } from "../../styles/themes/default";
import logo from "./../../assets/logo-coffee-delivery.svg";
import { ButtonCardContainer, ButtonLocationContainer, HeaderContainer } from "./styles";

export function Header() {
    const [hoveringCartButton, setHoveringCartButton] = useState(false);
    const [hoveringLocationButton, setHoveringLocationButton] = useState(false);

    const { productsCartList } = useProductsCart();

    const totalUnitsInCart = productsCartList.reduce((previousValue, item) => previousValue + item.quantity, 0);

    return (
        <HeaderContainer>
            <NavLink to="/ignite-v2-desafio-02/">
                <img src={logo} alt="" />
            </NavLink>
            <nav>
                <ButtonLocationContainer
                    onMouseEnter={() => setHoveringLocationButton(true)}
                    onMouseLeave={() => setHoveringLocationButton(false)}
                >
                    <MapPin
                        size="22"
                        weight="fill"
                        color={hoveringLocationButton ? defaultTheme.white : defaultTheme.purple} />
                    Belo Horizonte
                </ButtonLocationContainer>
                <NavLink to="/ignite-v2-desafio-02/checkout">
                    <ButtonCardContainer
                        tabIndex={-1}
                        onMouseEnter={() => setHoveringCartButton(true)}
                        onMouseLeave={() => setHoveringCartButton(false)}
                    >
                        <ShoppingCartSimple
                            size="22"
                            weight="fill"
                            color={hoveringCartButton ? defaultTheme.white : defaultTheme.yellowDark} />
                        {totalUnitsInCart > 0 ? <span>{totalUnitsInCart}</span> : <></>}
                    </ButtonCardContainer>
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}